import React from "react";
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
import { useState, useRef } from "react";

type propType = {
  closeImportingView: () => void;
};

const ImportField = ({ closeImportingView }: propType) => {
  const [currentImage, setCurrentImage] = useState("img");

  const inputRef = useRef(null);

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
        src !== null && setCurrentImage(src);
      } else {
        setCurrentImage("fail");
      }
    } else {
      setCurrentImage("fail");
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
        <h2> {currentImage !== "img" ? "Accept" : "Close"}</h2>
      </CloseButton>
      <ImageWrapper>
        <Image
          src={currentImage}
          alt={currentImage === "fail" ? "Loading image failed" : "Load image"}
        />
      </ImageWrapper>
    </Background>
  );
};

export default ImportField;
