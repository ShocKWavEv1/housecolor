import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const load = keyframes`
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
`;

const hiddenStyles = css`
  opacity: 0;
  visibility: hidden;
`;

const StyledLoader = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  visibility: visible;
  opacity: 1;
  scale: 2;
  background: #151A30;
  transition: 0.3s;

  ${(p) => !p.isLoading && hiddenStyles};

  ::after {
    content: "";
    width: 32px;
    height: 72px;
    display: inline-block;
    left: 5px;
    position: relative;
    border: 2px solid #fff;
    box-sizing: border-box;
    animation: ${load} 1.5s linear infinite alternate;
    color: #4F26E9;
    transform: perspective(140px) rotateX(-45deg);
  }
`;

export const Loader = ({ isLoading, onTransitionEnd }) => (
  <StyledLoader
    id="loader"
    onTransitionEnd={onTransitionEnd}
    isLoading={isLoading}
  />
);

