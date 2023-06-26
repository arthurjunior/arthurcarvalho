import { MenuContainer } from "./styles";
import StatusJob from "../StatusJob";
import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Menu() {
  return (
    <>
      <MenuContainer>
        <Logo />
        <Navigation />
      </MenuContainer>
    </>
  );
}
