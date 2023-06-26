import Menu from "../../components/Menu";
import StatusJob from "../../components/StatusJob";
import {
  Header,
  Banner,
  ContainerStatus,
  HomerContainer,
  LogoSkater,
} from "./styles";

import imgSkater from "../../assets/images/LogoBanner.svg";
import Title from "../../components/Title";

export default function Home() {
  return (
    <>
      <HomerContainer>
        <Banner>
          <ContainerStatus>
            <StatusJob />
          </ContainerStatus>

          <Header>
            <Menu />
          </Header>
        </Banner>
        <LogoSkater>
          <img src={imgSkater} alt="" />
        </LogoSkater>

        <Title/>
      </HomerContainer>
    </>
  );
}
