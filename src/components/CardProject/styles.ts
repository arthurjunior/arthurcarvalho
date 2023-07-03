import styled from "styled-components";
import banner from "../../assets/images/shop-cart.png";
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 45.4rem;

  &:hover .mobile
   {
    opacity: 1;
  }

  &:hover .titleProject {
    opacity: 1;
  }
`;
export const CardContent = styled.div`
  max-width: 45.4rem;
  position: relative;
  height: 25rem;
  width: 100%;
  background-image: url(${banner});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(13.5px);
  box-shadow: 0 8px 32px 0 rgba(38, 35, 56, 0.9);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 2px solid rgb(38, 35, 56);
`;
export const TabletContainer = styled.div`
  opacity: 0;
  height: 100%;
  transition: all 0.4s ease-in-out 0s;
  > img {
    position: relative;
    left: 36rem;
    top: 0.6rem;
    width: 17rem;
  }
`;

export const MobileContainer = styled.div`
  > img {
    position: absolute;
    left: 31rem;
    top: 3rem;
    width: 10rem;
  }
`;

export const ContainerSpan = styled.span`
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
`;

export const TitleProject = styled.span`
  position: absolute;
  padding: 0px 1rem 2.2rem;
  bottom: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(rgba(0, 0, 0, 0) -60%, rgb(8, 2, 5));
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;

  > h2 {
    font-size: 3rem;
    font-weight: 900;
    color:
  }

  > span {
    font-size: 1.9rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
`;
