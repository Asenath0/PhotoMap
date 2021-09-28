import styled from "styled-components";

interface WrapperType {
  readonly isImportingOn: boolean;
}


export const Wrapper = styled.div<WrapperType>`
  height: 100vh;
  overflow-y: ${(props) => (props.isImportingOn && "hidden")};
`;
