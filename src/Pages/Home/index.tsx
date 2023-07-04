import Menu from "../../components/Menu";
import StatusJob from "../../components/StatusJob";
import { ContainerStatus, HomeContainer, LogoSkater } from "./styles";
import imgSkater from "../../assets/images/LogoBanner.svg";
import Title from "../../components/Title";
import StarsCanvas from "../../components/Stars";

export default function Home() {
  return (
    <>
    <HomeContainer>
      <StarsCanvas />
      <ContainerStatus>
        <StatusJob />
      </ContainerStatus>

      <Menu />

      <Title />

      <LogoSkater >
        <img src={imgSkater} alt="" />
      </LogoSkater>
      </HomeContainer>

    
    </>
  );
}
