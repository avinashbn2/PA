import React from "react";
import PropTypes from "prop-types";

import { Error } from "components/shared/styles";
import { StyledInput, StyledLabel } from "./styles";

const Input = React.forwardRef(
  (
    { error, type, value, disabled, onChange, placeholder, label, ...others },
    ref
  ) => (
    <StyledInput>
      {label && <StyledLabel>{label}</StyledLabel>}
      <input
        value={value}
        onClick={onChange}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        error={error}
        ref={ref}
        {...others}
      />
      {error && <Error>{error}</Error>}
    </StyledInput>
  )
);

export default Input;
Input.defaultProps = {};

Input.displayName = "Input";
Input.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
