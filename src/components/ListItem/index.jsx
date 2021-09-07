import React from "react";
import PropTypes from "prop-types";
import { StyledListItem } from "./styles";

function ListItem({ onClick, children, active, icon: Icon }) {
  return (
    <StyledListItem active={active} onClick={onClick}>
      {Icon && Icon}
      {children}
    </StyledListItem>
  );
}
export default ListItem;
ListItem.defaultProps = {
  active: false,
};

ListItem.displayName = "ListItem";
ListItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  acitve: PropTypes.bool,
  icon: PropTypes.node,
};
