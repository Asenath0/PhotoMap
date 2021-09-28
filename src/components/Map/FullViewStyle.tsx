import styled from "styled-components";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  overflow: auto;
  padding: 1em;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 10vh;
`;


interface ImageType {
  readonly image: string;
}

export const Image = styled.div<ImageType>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => (props.image)});
`
