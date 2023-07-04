import Menu from "../../components/Menu";
import StatusJob from "../../components/StatusJob";
import { ContainerStatus, HomeContainer, LogoSkater } from "./styles";
import imgSkater from "../../assets/images/LogoBanner.svg";
import Title from "../../components/Title";
import StarsCanvas from "../../components/Stars";
import CardAbout from "../../components/CardAbout";

export default function Home() {
  return (
    <>
      <StarsCanvas/>
      <HomeContainer>
        <ContainerStatus>
          <StatusJob />
        </ContainerStatus>
        <Menu />
        <Title />
        <LogoSkater>
          <img src={imgSkater} alt="" />
        </LogoSkater>
      </HomeContainer>

      <CardAbout/>
      
    </>
  );
}
