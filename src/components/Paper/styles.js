import styled from "styled-components";
import { getColor } from "utils/theme";

export const StyledPaper = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 0.25em rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  padding: 4em 2em;
  &:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 1em rgba(0, 0, 0, 0.1);
  }
`;
