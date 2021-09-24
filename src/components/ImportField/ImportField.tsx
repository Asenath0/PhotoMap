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
import { useState } from "react";

type propType = {
  closeImportingView: () => void
}

const ImportField = ({ closeImportingView }: propType) => {
  const [currentImage, setCurrentImage] = useState("img");

  const currentImageHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //@ts-ignore
    let img = e?.target?.files[0]
    let src: string | null = URL?.createObjectURL(img);
    src !== null && setCurrentImage(src);
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
        <Image src={currentImage} alt={currentImage !== "img" ? "Loading image failed" : "Load image"} />
      </ImageWrapper>
    </Background>
  );
};

export default ImportField;
