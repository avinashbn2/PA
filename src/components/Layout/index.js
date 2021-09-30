import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import SidebarContext from "contexts/sidebar";

import { StyledLayout, StyledContent } from "./styles";
import { routes } from "utils/routeConfig";
import Sidebar from "components/Sidebar";
import { useLocation } from "react-router-dom";
import Header from "components/Header";
function Layout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);
  const location = useLocation();
  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      <StyledLayout open={openSidebar}>
        <Sidebar activeRoute={location.pathname} routes={routes}></Sidebar>
        <Header />
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
    </SidebarContext.Provider>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default memo(Layout);
