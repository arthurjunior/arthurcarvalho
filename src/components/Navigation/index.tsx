import { Li, Nav } from "./styles";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <Nav>
        <Link to="/">
          <Li>Home</Li>
        </Link>

        <Link to="/projetos">
          <Li>Projetos</Li>
        </Link>
        <Link to="/sobre">
          <Li>Sobre</Li>
        </Link>
        <Link to="/contato">
          <Li>Contato</Li>
        </Link>
      </Nav>
    </>
  );
}
