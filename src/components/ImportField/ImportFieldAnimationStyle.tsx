import styled, { keyframes } from "styled-components";

const Pop = keyframes`
    from {transform: scale(0)}
    to {transform: scale(1)}
`
export const On = styled.div`
    width: 100%;
    min-height: 100%;
    animation: ${Pop} 0.15s linear;
    position: absolute;
    z-index: 3;
`

export const Off = styled.div`
    transform: scale(0);
    width: 100%;
    min-height: 100%;
    animation: ${Pop} 0.15s linear reverse;
    position: absolute;
    z-index: 3;
`