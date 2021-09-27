
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";

export const Button = styled.button`
color: whitesmoke;
background: black;
padding: 1em;
border-radius: 5px;
border: none;
transition: 0.2s;
cursor: pointer;
height: 25vh;
margin: 0 0 0 auto;
position: relative;
z-index: 1;

&:hover {
    background: steelblue;
  }

  @media (max-width: 768px) {
    margin-top: 15vh;
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
  width: 100vw;
  overflow: hidden;
`

export const CarouselWrapper = styled.div`
  width: 250vh;
  position: absolute;
  display: inline;
  z-index: 0;


`

export const ImageWrapper = styled.div`
  height: 25vh;
  max-width: 25vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 25vh;
    height: 15vh;
  }
`
