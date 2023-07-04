import styled from "styled-components";

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoSkater = styled.div`
  position: absolute;
  top: 15rem;
  right: 25rem;
  transition: all 0.3ms linear;
  animation: animationLoad 3s, ImgAnimation 3s infinite linear;

  > img {
    width: 25rem;
  }

  @keyframes animationLoad {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes ImgAnimation {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 995px) {
    position: static;
    text-align: center;
  }
`;

export const HomeContainer = styled.section`
  height: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 995px) {
    display: block;
  }
`;


