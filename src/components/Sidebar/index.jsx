import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { StyledSidebar, StyledRoutes } from "./styles";
import ListItem from "../ListItem";
import { MdMenu, MdClose } from "react-icons/md";
import SidebarContext from "contexts/sidebar";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Sidebar({ onClick, routes, activeRoute }) {
  const { openSidebar, setOpenSidebar } = useContext(SidebarContext);
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const toggleOpen = useCallback(() => {
    setOpenSidebar((o) => !o);
  }, [setOpenSidebar]);
  // if (isMobile) {
  //   return (
  //     <>
  //       {openSidebar ? (
  //         <MdMenu onClick={toggleOpen} />
  //       ) : (
  //         <MdClose onClick={toggleOpen} />
  //       )}
  //     </>
  //   );
  // }
  return (
    <StyledSidebar>
      {/* {openSidebar ? (
        <MdMenu onClick={toggleOpen} />
      ) : (
        <MdClose onClick={toggleOpen} />
      )} */}
      {/* <Brand title="Dashboard" /> */}
      <StyledRoutes open={openSidebar}>
        {routes.map((route) => {
          return !route?.path.includes(":") ? (
            <ListItem
              acitve={route.path === activeRoute}
              key={route.name}
              onClick={() => history.push(route.path)}
              icon={route.icon}
            >
              {route.name}
            </ListItem>
          ) : null;
        })}
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
