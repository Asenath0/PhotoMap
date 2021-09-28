import Map from "../Map/Map";
import ImportField from "../ImportField/ImportField";
import { useState, useRef, useContext, useEffect } from "react";
import Header from "../Header/Header";
import ImportFieldAnimation from "../ImportField/ImportFieldAnimation";
import Footer from "../Footer/Footer";
import EXIF from "exif-js";
import ButtonImport from "../ButtonImport/ButtonImport";
import AuthContext from "../../store/auth-context";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

const Dashboard1 = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const authContext = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    const db = getFirestore();
    const getData = async () => {
      const ref = collection(db, "images");
      const q = query(ref, where("userId", "==", authContext.userId));
      const querySnapshot = await getDocs(q);
      //@ts-ignore
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      //@ts-ignore
      setData(items);
    };
    getData();
  }, [authContext]);

  const shouldAnimateHandler = (bool: boolean) => setShouldAnimate(bool);

  const [isImportingOn, setIsImportingOn] = useState(false);

  const isImportingOnHandler = (): void =>
    setIsImportingOn((isImportingOn) => !isImportingOn);

  const [currentImage, setCurrentImage] = useState({
    source: "",
    longitude: 0,
    latitude: 0,
    status: "Please load image",
  });

  const [coordinates, setCoordinates] = useState<[number, number]>([
    currentImage.latitude,
    currentImage.longitude,
  ]);

  const coordinatesHandler = () =>
    setCoordinates([currentImage.latitude, currentImage.longitude]);

  const inputRef: React.Ref<HTMLInputElement> = useRef(null);

  const ConvertDMSToDD = (
    degrees: number,
    minutes: number,
    seconds: number,
    direction: string
  ) => {
    let dd = degrees + minutes / 60 + seconds / (60 * 60);

    (direction === "S" || direction === "W") && (dd = dd * -1);

    return dd;
  };

  const currentImageHandler = (): void => {
    //@ts-ignore
    let img = inputRef.current.files[0];

    if (img !== null && img !== undefined) {
      const fileType = img["type"];
      const validImageTypes = [
        "image/gif",
        "image/jpg",
        "image/png",
        "image/jpeg",
      ];

      if (validImageTypes.includes(fileType)) {
        let src: string = URL?.createObjectURL(img);
        //@ts-ignore
        EXIF.getData(img, function () {
          let getLongitude = EXIF.getTag(img, "GPSLongitude");
          let getLatitude = EXIF.getTag(img, "GPSLatitude");
          let getLongitudeTag = EXIF.getTag(img, "GPSLongitudeRef");
          let getLatitudeTag = EXIF.getTag(img, "GPSLatitudeRef");

          if (getLongitude === undefined || getLatitude === undefined) {
            setCurrentImage({
              source: "",
              longitude: 0,
              latitude: 0,
              status: "Sorry, this image has no GPS information",
            });
          } else {
            let longitude = `${getLongitude}`;
            let latitude = `${getLatitude}`;

            let longitudeTab = longitude.split(",");
            let latitudeTab = latitude.split(",");

            src &&
              setCurrentImage({
                source: src,
                latitude: ConvertDMSToDD(
                  parseInt(latitudeTab[0]),
                  parseInt(latitudeTab[1]),
                  parseInt(latitudeTab[2]),
                  getLatitudeTag
                ),
                longitude: ConvertDMSToDD(
                  parseInt(longitudeTab[0]),
                  parseInt(longitudeTab[1]),
                  parseInt(longitudeTab[2]),
                  getLongitudeTag
                ),
                status: "Loaded",
              });
          }
        });
      } else {
        setCurrentImage({
          source: "",
          longitude: 0,
          latitude: 0,
          status: "Wrong file extention, please use .jpeg, .jpg, .png or .gif",
        });
      }
    } else {
      setCurrentImage({
        source: "",
        longitude: 0,
        latitude: 0,
        status: "Loading image failed",
      });
    }
  };

  return (
    <div>
      {shouldAnimate && (
        <ImportFieldAnimation
          isImportingOn={isImportingOn}
          child={
            <ImportField
              isImportingOnHandler={isImportingOnHandler}
              inputRef={inputRef}
              currentImage={currentImage}
              currentImageHandler={currentImageHandler}
              coordinatesHandler={coordinatesHandler}
            />
          }
        />
      )}

      <Header />
      <Map currentImage={currentImage.source} coordinates={coordinates} />

      <ButtonImport
        ImportingHandler={isImportingOnHandler}
        shouldAnimate={shouldAnimateHandler}
      />

      <Footer />
    </div>
  );
};

export default Dashboard1;
