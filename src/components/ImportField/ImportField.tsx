import React, { FC } from "react";
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


interface ImportFieldInterface {
  isImportingOnHandler: () => void;
  inputRef: React.Ref<HTMLInputElement>; 
  currentImage: string; 
  currentImageHandler: () => void; 
};

const ImportField: FC<ImportFieldInterface> = ({ isImportingOnHandler, inputRef, currentImage, currentImageHandler }) => {
  

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

      <CloseButton onClick={isImportingOnHandler}>
        <h2> {currentImage !== "img" ? "Accept" : "Close"}</h2>
      </CloseButton>
      <ImageWrapper>
        <Image src={currentImage} alt={currentImage} />
      </ImageWrapper>
    </Background>
  );
};

export default ImportField;
