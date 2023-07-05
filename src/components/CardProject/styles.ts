import styled from "styled-components";
import banner from "../../assets/images/shop-cart.png";
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45.4rem;

  cursor: pointer;
  &:hover .mobile {
    display: block;
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
  /* backdrop-filter: blur(13.5px); */
  /* box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.3); */
  /* -webkit-backdrop-filter: blur(13.5px); */
  border-radius: 13px;
  border: 2px solid rgb(38, 35, 56);

  &:hover {
    border: 2px solid rgba(84, 59, 163);
  }
`;
export const TabletContainer = styled.div`
  display: none;
  height: 100%;
  transition: all 0.4s ease-in-out 0s;
  > img {
    position: relative;
    left: 29.5rem;
    top: 0.6rem;
    width: 15rem;
  }
`;

export const MobileContainer = styled.div`
  > img {
    position: absolute;
    left: 26rem;
    top: 3rem;
    width: 8rem;
  }
`;

export const TitleProject = styled.span`
  position: absolute;
  padding: 0px 1.6rem 3.5rem;
  bottom: 0rem;
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
  border-radius: 10px;
  > h2 {
    font-size: 3rem;
    font-weight: 900;
    color: #8485f6;
  }

  > span {
    font-size: 1.9rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: #fff;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.9rem;
`;

export const TagSpan = styled.span`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  max-width: 3.2rem;

  > img {
    display: block;
    max-width: 100%;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
  }

  &:hover img {
    opacity: 0.55;
  }
`;
