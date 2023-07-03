import { useState } from "react";
import { List, X } from "phosphor-react";

import { MobileContent, MobileIcon, NavMenu } from "./styles";
export default function MenuMobile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
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

      <NavMenu onClick={handleOpen} open={open}>

      </NavMenu>
    </>
  );
}
