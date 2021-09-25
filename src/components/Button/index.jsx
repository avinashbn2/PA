import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

function Button({
  onClick,
  type = "button",
  children,
  disabled,
  color,
  fontSize,
  className,
  fullWidth = false,
}) {
  return (
    <StyledButton
      fontSize={fontSize}
      color={color}
      onClick={type === "button" && onClick}
      disabled={disabled}
      className={className}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
Button.defaultProps = {
  fontSize: "md",
  color: "secondary",
};

Button.displayName = "Button";
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
