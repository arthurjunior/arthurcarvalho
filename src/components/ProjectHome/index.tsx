import CardProject from "../CardProject";
import { ContainerProjects, ContentProjects, Title } from "./styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import code from "../../assets/icons/code-1115-svgrepo-com.svg";
export default function ProjectHome() {
  return (
    <>
      <ContainerProjects>
        <Title>
          Projetos
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
          <img src={code} alt="" />
        </Title>
        <ContentProjects>
          <CardProject title="Mercado Pago" subTitle="WebSite" />

          <CardProject title="Mercado Pago" subTitle="WebSite" />
        </ContentProjects>
      </ContainerProjects>
    </>
  );
}
