import styled, { keyframes } from "styled-components";

const Pop = keyframes`
    0% {transform: scale(0); opacity: 0}
    50% { opacity: 0 }
    100% {transform: scale(1); opacty: 1}
`;
export const On = styled.div`
  width: 100%;
  animation: ${Pop} 0.15s linear;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
`;

export const Off = styled.div`
  transform: scale(0);
  width: 100%;
  height: auto;
  animation: ${Pop} 0.15s linear reverse;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;

`;
