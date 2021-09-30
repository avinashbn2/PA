import Button from "components/Button";
import Search from "components/Search";
import React, { memo } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { StyledHeader } from "./styles";
import { logout } from "containers/Auth/authSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Search placeholder="Search..." />
      <Button onClick={() => dispatch(logout())}>
        <HiOutlineLogout />
        Logout
      </Button>
    </StyledHeader>
  );
}

export default memo(Header);
Header.propTypes = {};
