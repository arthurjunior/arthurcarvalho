import styled from "styled-components";
import banner from "../../assets/images/bg-stars.svg";

export const HomerContainer = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: #131314; */
  min-height: 100vh;
  /* padding-top: 2rem; */
  width: 100%;
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header``;

export const LogoSkater = styled.div`
  position: absolute;
  top: 15rem;
  right: 25rem;
  /* transition: all 0.3ms linear; */
  animation: ImgAnimation 3s infinite linear;
  > img {
    width: 25rem;
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
`;
