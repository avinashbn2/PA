import React from "react";
import PropTypes from "prop-types";

import { Error } from "components/shared/styles";
import { StyledInput, StyledLabel } from "./styles";

function Input({ error, value, disabled, onChange, placeholder, label }) {
  return (
    <StyledInput>
      {label && <StyledLabel>{label}</StyledLabel>}
      <input
        value={value}
        onClick={onChange}
        disabled={disabled}
        placeholder={placeholder}
        type="text"
        error={error}
      />
      {error && <Error>{error}</Error>}
    </StyledInput>
  );
}

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
