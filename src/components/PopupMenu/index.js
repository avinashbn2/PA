import React, { useRef } from "react";
import { useClickOutside } from "hooks";
import { StyledPopupMenu, StyledPopupMenuItem } from "./styles";
function PopupMenu({ children, anchor, onClose }) {
  const ref = useRef();
  useClickOutside(ref, onClose);
  return (
    <StyledPopupMenu anchor={anchor} ref={ref}>
      {children}
    </StyledPopupMenu>
  );
}

PopupMenu.Item = StyledPopupMenuItem;

export default PopupMenu;
