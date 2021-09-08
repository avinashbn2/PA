import Search from "components/Search";
import React from "react";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Search placeholder="Search..." />
    </StyledHeader>
  );
}

export default Header;
Header.propTypes = {};
