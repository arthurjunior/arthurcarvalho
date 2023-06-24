import styled from "styled-components";
import banner from "../../assets/images/banner.png";

export const Header = styled.header`
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70rem;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;
