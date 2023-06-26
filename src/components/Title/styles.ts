import styled from "styled-components";

export const ContainerTitle = styled.div`
  position: absolute;
  top: 25rem;
  left: 10rem;
  overflow: hidden;
`;

export const IntroTextP = styled.p`
  color: rgb(178, 187, 207);
  font-size: 2rem;
`;

export const IntroTextH1 = styled.h1`
  color: #8485f6;
  font-size: 4rem;
  letter-spacing: 0.16em;
  font-weight: 800;
  text-transform: uppercase;
`;

export const IntroTextH2 = styled.h2`
  color: #d9d9d9;
  font-size: 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #131314;
    border-left: 2px solid #fff;
    animation: animate 4s steps(12) infinite;
  }

  @keyframes animate {
    40%,
    60% {
      left: 100%;
    }

    100% {
      left: 0%;
    }
  }
`;
