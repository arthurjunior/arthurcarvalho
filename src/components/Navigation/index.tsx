
import { Li, Nav } from "./styles";


export default function Navigation() {
  const scrollToProjetos = () => {
    const projetosElement = document.getElementById("projetos");
    if (projetosElement) {
      projetosElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav>
        
        <a href="#home">
          <Li style={{ animation: "0.5s ease 0.3s 1 normal forwards running navLinkFade" }}>Home</Li>
          </a>
        

          <a href="#projetos">
          <Li onClick={scrollToProjetos} style={{ animation: "0.5s ease 0.442857s 1 normal forwards running navLinkFade" }}>Projetos</Li>
          </a>

        <a href ="#about">
          <Li style={{ animation: "0.5s ease 0.585714s 1 normal forwards running navLinkFade" }}>Sobre</Li>
        </a>

        <a href="#contato">
          <Li style={{ animation: "0.5s ease 0.728571s 1 normal forwards running navLinkFade" }}>Contato</Li>
        </a>
      </Nav>
    </>
  );
}
