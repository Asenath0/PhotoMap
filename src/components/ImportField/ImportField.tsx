import React, { FC } from "react";

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

interface ImportFieldInterface {
  isImportingOnHandler: () => void;
  inputRef: React.Ref<HTMLInputElement>;
  currentImage: {
    source: string;
    longitude: number;
    latitude: number;
    status: string;
  };
  currentImageHandler: () => void;
  coordinatesHandler: () => void;
}

const ImportField: FC<ImportFieldInterface> = ({
  isImportingOnHandler,
  inputRef,
  currentImage,
  currentImageHandler,
  coordinatesHandler,
}) => {
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

      <CloseButton
        onClick={() => {
          isImportingOnHandler();
          coordinatesHandler();
        }}
      >
        {currentImage.status === "Loaded" ? "Accept" : "Close"}
      </CloseButton>
      <Image source={currentImage.source}>
        {currentImage.status !== "Loaded" && currentImage.status}
      </Image>
    </Background>
  );
};

export default ImportField;
