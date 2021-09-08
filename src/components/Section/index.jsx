import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  StyledSection,
  SectionHeader,
  SectionTitle,
} from "./styles";
import Chip from "../Chip";
import "scrollbar.css";

function Section({ children, title, count }) {
  return (
    <Container>
      <SectionHeader justify="space-between" align="center" bgColor="#F4F5F7">
        <SectionTitle>{title}</SectionTitle>
        <Chip size="sm" color="#36454f">
          {count}
        </Chip>
      </SectionHeader>

      <StyledSection>{children}</StyledSection>
    </Container>
  );
}
export default Section;
Section.defaultProps = {
  count: 0,
};

Section.displayName = "Section";
Section.propTypes = {
  children: PropTypes.node,
};
