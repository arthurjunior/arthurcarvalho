import Menu from "../../components/Menu";
import StatusJob from "../../components/StatusJob";
import { ContainerStatus, BannerContainer, LogoSkater } from "./styles";
import Title from "../../components/Title";
import StarsCanvas from "../../components/Stars";
import CardAbout from "../../components/CardAbout";
import skater from "../../assets/images/LogoBanner.svg"
export default function Home() {
  return (
    <>
      <StarsCanvas />
      <ContainerStatus>
        <StatusJob />
      </ContainerStatus>
      <BannerContainer>
        <Menu />
        <Title />
       <LogoSkater>
        <img src={skater} alt="" />
       </LogoSkater>
      </BannerContainer>

      <CardAbout />
    </>
  );
}
