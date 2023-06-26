import LogoTitle from "../LogoTitle";
import { LogoContainer, ImgContainer } from "./styles";
import logoPizza from "../../assets/images/logoPizza-PhotoRoom.png-PhotoRoom.png"
export default function Logo() {
  return (
    <LogoContainer>
      <ImgContainer><img src={logoPizza} alt="Logo Pizza" /></ImgContainer>
      <LogoTitle />
    </LogoContainer>
  );
}
