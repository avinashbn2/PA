import React from "react";
import PropTypes from "prop-types";
import { StyledBrand } from "./styles";

function Brand({ onClick, title }) {
  return <StyledBrand onClick={onClick}>{title}</StyledBrand>;
}

export default Brand;
Brand.defaultProps = {};

Brand.displayName = "Brand";
Brand.propTypes = {
  onClick: PropTypes.func,
};
