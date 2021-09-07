import React from "react";
import PropTypes from "prop-types";
import { StyledSidebar } from "./styles";
import ListItem from "../ListItem";

function Sidebar({ onClick, routes, activeRoute }) {
  return (
    <StyledSidebar>
      {routes.map((route) => (
        <ListItem
          acitve={route.name === activeRoute}
          key={route.name}
          onClick={onClick}
          icon={route.icon}
        >
          {route.name}
        </ListItem>
      ))}
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
