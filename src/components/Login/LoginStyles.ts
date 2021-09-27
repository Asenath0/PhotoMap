import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  height: 100vh;

  * {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 1em;
    background-color: #fff;
  }
`;

export const LoginCard = styled.div`
  margin-top: -8em;
  background-color: #fff;
  border-radius: 0.75em;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  padding: 5em;
  max-width: 20em;

  @media (max-width: 768px) {
    padding: 0;
    box-shadow: none;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25em;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.25em;
  height: 2em;
  font-size: 1.5em;
  color: #211f1f;
  cursor: pointer;
  transition-duration: 0.2s;

  &:focus {
    transform: scale(0.98);
  }

  &:hover {
    border: 1px solid #242424;
  }
`;

export const Title = styled.h1`
  margin: 0 0 0.75em 0;
`;