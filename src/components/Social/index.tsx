import { ContainerSocials, IconSocial } from "./styles";
import LogoCurriculo from "../../assets/images/LogoCurriculo.svg";
import LogoLinkedin from "../../assets/images/LinkedinLogo.svg";
import gitHubLogo from "../../assets/images/Githublogo.svg";

export default function Social() {
  return (
    <ContainerSocials>
      <IconSocial href="https://drive.google.com/file/d/1izpRWKk_9VjdimRFrmYDgArjHREyiya_/view" target="_blank">
        <img src={LogoCurriculo} alt="" title="Baixar Currículo" />
      </IconSocial>

      <IconSocial href="https://github.com/LSB30" target="_blank">
        <img src={gitHubLogo} alt="" title="Meu GitHub" />
      </IconSocial>

      <IconSocial href="https://www.linkedin.com/in/lucassantana30/" target="_blank">
        <img src={LogoLinkedin} alt="" title="Meu Linkedin" />
      </IconSocial>
    </ContainerSocials>
  );
}
