import React, { FC } from "react";
import EXIF from "exif-js";

import {
  Background,
  ImportContent,
  Input,
  Icon,
  FlexRowCenter,
  ChooseLink,
  Image,
  CloseButton,
} from "./ImportFieldStyle";
import { useState, useRef } from "react";

interface ImportFieldInterface {
  closeImportingView: () => void;
}

const ImportField: FC<ImportFieldInterface> = ({ closeImportingView }) => {
  const [currentImage, setCurrentImage] = useState({
    source: "",
    latitude: 0,
    longitude: 0,
    status: "Load image",
  });

  const inputRef = useRef(null);

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
    <Background>
      <form>
        <ImportContent>
          <Input
            ref={inputRef}
            type="file"
            id="input"
            accept="image/gif, image/jpg, image/png, image/jpeg"
            onChange={currentImageHandler}
          />

          <Icon />
          <h2>Drag and drop to upload image</h2>
          <p>or</p>
          <FlexRowCenter>
            <ChooseLink htmlFor="input">
              <h3>Choose file</h3>
            </ChooseLink>
            <p>from your computer </p>
          </FlexRowCenter>
        </ImportContent>
      </form>

      <CloseButton onClick={closeImportingView}>
        {currentImage.status === "Loaded" ? "Accept" : "Close"}
      </CloseButton>
      <Image source={currentImage.source}>
        {currentImage.status !== "Loaded" && currentImage.status}
      </Image>
    </Background>
  );
};

export default ImportField;
