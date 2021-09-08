import React from "react";
import PropTypes from "prop-types";
import { StyledSearch, StyledInput } from "./styles";
import { FaSearch } from "react-icons/fa";

function Search({ onChange, placeholder }) {
  return (
    <StyledSearch>
      <FaSearch />
      <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
    </StyledSearch>
  );
}
export default Search;
Search.defaultProps = {
  active: false,
};

Search.displayName = "Search";
Search.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
