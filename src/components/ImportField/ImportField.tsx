import React, { ChangeEvent } from "react";
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
  const [currentImage, setCurrentImage] = useState("img");

  //@ts-ignore
  const currentImageHandler = (e): void => {
    let src: string = URL?.createObjectURL(e?.target?.files[0]);
    {
      src && setCurrentImage(src);
    }
    console.log(src);
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
        <h2> {currentImage !== "img" ? "Accept" : "Close"}</h2>
      </CloseButton>
      <ImageWrapper>
        <Image src={currentImage} alt="" />
      </ImageWrapper>
    </Background>
  );
};

export default ImportField;
