import { useState } from "react";
import { List, X } from "phosphor-react";
import { MobileContent, MobileIcon, NavMenu } from "./styles";

export default function MenuMobile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <MobileContent>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </MobileContent>

      <NavMenu open={open}>
        {open && (
          <ul>
            <li>
              <a href="#home" onClick={handleCloseMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={handleCloseMenu}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleCloseMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" onClick={handleCloseMenu}>
                Contato
              </a>
            </li>
          </ul>
        )}
      </NavMenu>
    </>
  );
}
