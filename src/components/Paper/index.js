import React from "react";
import PropTypes from "prop-types";
import { StyledPaper } from "./styles";

function Paper({ children }) {
  return <StyledPaper>{children}</StyledPaper>;
}

Paper.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ),
};

export default Paper;
