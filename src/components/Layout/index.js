import React from "react";
import PropTypes from "prop-types";

import StyledLayout from "./styles";
function Layout({ children }) {
  return <StyledLayout></StyledLayout>;
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Layout;
