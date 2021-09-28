import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import Arrow from "react-elastic-carousel";

export const Button = styled.button`
  color: whitesmoke;
  background: black;
  padding: 1em;
  border-radius: 5px;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  height: 25vh;

  &:hover {
    background: steelblue;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Icon = styled(FaCloudUploadAlt)`
  font-size: 4em;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export const CarouselWrapper = styled(Arrow)``;

export const ImageWrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 10vh;
  }
`;
