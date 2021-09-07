import React from "react";
import PropTypes from "prop-types";
import { StyledChip } from "./styles";

function Chip({ onClick, children, disabled, color, fontSize }) {
  return (
    <StyledChip
      fontSize={fontSize}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledChip>
  );
}

export default Chip;
Chip.defaultProps = {
  fontSize: "md",
  color: "primary",
};

Chip.displayName = "Chip";
Chip.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
