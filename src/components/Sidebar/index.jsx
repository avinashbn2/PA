import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { StyledSidebar, StyledRoutes } from "./styles";
import ListItem from "../ListItem";
import Brand from "components/Brand";
import { MdMenu, MdClose } from "react-icons/md";
import SidebarContext from "contexts/sidebar";

function Sidebar({ onClick, routes, activeRoute }) {
  const { openSidebar, setOpenSidebar } = useContext(SidebarContext);
  const toggleOpen = useCallback(() => {
    setOpenSidebar((o) => !o);
  }, [setOpenSidebar]);
  return (
    <StyledSidebar>
      {openSidebar ? (
        <MdMenu onClick={toggleOpen} />
      ) : (
        <MdClose onClick={toggleOpen} />
      )}
      <Brand title="LOGO" />
      <StyledRoutes open={openSidebar}>
        {routes.map((route) => (
          <ListItem
            acitve={route.path === activeRoute}
            key={route.name}
            onClick={onClick}
            icon={route.icon}
          >
            {route.name}
          </ListItem>
        ))}
      </StyledRoutes>
    </StyledSidebar>
  );
}
export default Sidebar;
Sidebar.defaultProps = {};

Sidebar.displayName = "Sidebar";
Sidebar.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  acitve: PropTypes.bool,
};
