import React, { ChangeEvent } from "react";
import EXIF from "exif-js";

import {
  Background,
  ImportContent,
  Input,
  Icon,
  FlexRowCenter,
  ChooseLink,
  ImageWrapper,
  Image,
  CloseButton,
} from "./ImportFieldStyle";
import { useState } from "react";

//@ts-ignore
const ImportField = ({ closeImportingView }) => {
  const [currentImage, setCurrentImage] = useState({
    source: "img",
    latitude: 0,
    longitude: 0,
  });

  function ConvertDMSToDD(degrees: number, minutes: any, seconds: any) {
    var dd = degrees + minutes / 60 + seconds / (60 * 60);

    // if (direction === "S" || direction === "W") {
    //   dd = dd * -1;
    // } // Don't do anything for N or E
    return dd;
  }

  //@ts-ignore
  const currentImageHandler = (e): void => {
    let img = e?.target?.files[0];
    let src: string = URL?.createObjectURL(img);
    EXIF.getData(img, function () {
      //@ts-ignore
      let getLongitude = EXIF.getTag(img, "GPSLongitude");
      let getLatitude = EXIF.getTag(img, "GPSLatitude");

      let longitude = `${getLongitude}`;
      let latitude = `${getLatitude}`;

      let longitudeTab = longitude.split(",");
      let latitudeTab = latitude.split(",");

      console.log(longitudeTab, latitudeTab);

      src &&
        setCurrentImage({
          source: src,
          latitude: ConvertDMSToDD(
            parseInt(latitudeTab[0]),
            latitudeTab[1],
            latitudeTab[2]
          ),
          longitude: ConvertDMSToDD(
            parseInt(longitudeTab[0]),
            longitudeTab[1],
            longitudeTab[2]
          ),
        });
    });
  };

  return (
    <Background>
      <form>
        <ImportContent>
          <Input
            type="file"
            id="input"
            accept="image/*"
            onChange={(e) => currentImageHandler(e)}
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
        <h2> {currentImage.source !== "img" ? "Accept" : "Close"}</h2>
      </CloseButton>
      <ImageWrapper>
        <Image src={currentImage.source} alt="" id="dupa" />
        <p>{currentImage.longitude}</p>
        <p>{currentImage.latitude}</p>
      </ImageWrapper>
    </Background>
  );
};

export default ImportField;
