import { BsList } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import { RiAccountCircleFill } from "react-icons/ri";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Blue = styled.span`
  color: steelblue;
`;

export const Title = styled.h1`
  margin: 0;
  padding-top: 0.5em;
`;

export const SubTitle = styled.h2`
  margin: 0 0 1em 0;
  font-size: 0.9em;
  font-weight: 400;
`;

export const Menu = styled.div`
  padding: 1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;

  > div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const AccountIcon = styled(RiAccountCircleFill)`
  fill: black;
  font-size: 2em;
`;

export const ListIcon = styled(BsList)`
  fill: black;
  font-size: 2em;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  :focus {
    fill: steelblue;
  }
`;

export const List = styled.div`
  background: whitesmoke;
  position: relative;
  padding: 0.5em;
  z-index: 2;
  width: 150px;
  text-align: center;
  border-radius: 5px;

  transition: 0.3s;
`;

export const ListButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 0.5em;
  background: white;
  border: none;
  outline: none;
  transition: 0.3s;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: whitesmoke;
  }
`;
const Show = keyframes`
    0% {transform: scaleY(0); margin-top: 0}
    100% {transform: scaleY(1); margin-top: 3em}
`;
export const On = styled.div`
  width: 150px;
  animation: ${Show} 0.1s linear;
  position: absolute;
  margin-top: 3em;
  z-index: 1;
`;

export const Off = styled.div`
  transform: scaleY(0);
  width: 150px;
  animation: ${Show} 0.1s linear reverse;
  position: absolute;
  margin-top: 3em;
  z-index: 1;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
