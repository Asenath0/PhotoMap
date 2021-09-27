import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  overflow: auto;
  padding: 1em;
  box-sizing: border-box;
`;

export const Input = styled.input`
  position: absolute;
  display: inline-block;
  width: 50vw;
  height: 20em;
  padding: 2em;
  border-radius: 5px;
  display: flex;
  color: transparent;

  ::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

export const ImportContent = styled.div`
  background: whitesmoke;
  width: 50vw;
  padding: 2em;
  text-align: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
`;

export const Icon = styled(FaCloudUploadAlt)`
  font-size: 5em;
`;

export const FlexRowCenter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: baseline;
`;

export const ChooseLink = styled.label`
  position: relative;
  z-index: 2;
  margin-right: 0.5em;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: steelblue;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  max-width: 100%;
  margin: 2em;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  color: white;
`;

export const CloseButton = styled.button`
  color: whitesmoke;
  background: black;
  border: none;
  padding: 0 3em;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  margin: 2em;

  &:hover {
    background: steelblue;
  }
`;
