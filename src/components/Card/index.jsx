import React from "react";
import PropTypes from "prop-types";

import {
  StyledContent,
  StyledCard,
  StyledCardFooter,
  StyledCardHeader,
  CardTitle,
} from "./styles";
function Card({ innerRef, children, ...otherProps }) {
  return (
    <StyledCard ref={innerRef} {...otherProps}>
      {children}
    </StyledCard>
  );
}

function CardHeader({ children, align = "center", justify = "space-between" }) {
  return (
    <StyledCardHeader justify={justify} align={align}>
      {children}
    </StyledCardHeader>
  );
}
function CardFooter({ children, align = "center", justify = "space-between" }) {
  return (
    <StyledCardFooter align={align} justify={justify}>
      {children}
    </StyledCardFooter>
  );
}

function CardContent({ children }) {
  return <StyledContent>{children}</StyledContent>;
}

Card.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf([PropTypes.node]),
    PropTypes.node,
  ]),
};

CardFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
};

CardHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
};

Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Title = CardTitle;

export default Card;
