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


&:hover {
    background: steelblue;
  }
`;

export const Icon = styled(FaCloudUploadAlt)`
  font-size: 4em;
`;

