import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

function Button({ onClick, children, disabled, color, fontSize }) {
  return (
    <StyledButton
      fontSize={fontSize}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
Button.defaultProps = {
  fontSize: "md",
  color: "primary",
};

Button.displayName = "Button";
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
