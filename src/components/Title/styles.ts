import styled from "styled-components";

export const ContainerTitle = styled.div`
  position: absolute;
  top: 25rem;
  left: 10rem;
  /* overflow: hidden; */

  @media (max-width: 995px) {
    position: static;
    margin: 5rem 5rem 2rem 5rem;
  }

  @keyframes titleAnimation {
      
  }
`;

export const ContainerMobile = styled.section`
  @media (max-width: 995px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
  }
`;

export const IntroTextP = styled.p`
  color: rgb(178, 187, 207);
  font-size: 2rem;

  @media (max-width: 995px) {
    font-size: 1.6rem;
  }
`;

export const IntroTextH1 = styled.h1`
  color: #8485f6;
  font-size: 5.5rem;
  font-weight: 800;
  text-transform: uppercase;

  @media (max-width: 995px) {
    font-size: 3.52rem;
    text-transform: none;
  }
`;

export const IntroTextH2 = styled.h2`
  color: #d9d9d9;
  font-size: 3rem;
  position: relative;

  @media (max-width: 995px) {
    font-size: 1.9rem;
  }
`;
