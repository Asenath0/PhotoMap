import ButtonImport from "./components/ButtonImport/ButtonImport";
import Map from "./components/Map/Map";
import ImportField from "./components/ImportField/ImportField";
import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import ImportFieldAnimation from "./components/ImportField/ImportFieldAnimation";
import Footer from "./components/Footer/Footer";
import EXIF from "exif-js";

function App() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
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

  const [coordinates, setCoordinates]  = useState<[number, number]>([
    currentImage.latitude,
    currentImage.longitude,
  ]);

  const coordinatesHandler = () =>
    setCoordinates([currentImage.latitude, currentImage.longitude]);

  const inputRef: React.Ref<HTMLInputElement> = useRef(null);

  const ConvertDMSToDD = (degrees: number, minutes: number, seconds: number) =>
    degrees + minutes / 60 + seconds / (60 * 60);

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
                  parseInt(latitudeTab[2])
                ),
                longitude: ConvertDMSToDD(
                  parseInt(longitudeTab[0]),
                  parseInt(longitudeTab[1]),
                  parseInt(longitudeTab[2])
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
    <div className="App">
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
}

export default App;
