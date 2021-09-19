import styled from "styled-components";
import Scrollbar from "react-perfect-scrollbar";
import { Column } from "components/shared/styles";

export const StyledProjects = styled(Scrollbar)`
  margin: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

export const StyledProject = styled(Column)`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.125), 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 1.5em;
  transition: box-shadow 0.3s linear;
  cursor: pointer;
  color: salmon;
  font-weight: bold;
  font-size: 20px;

  background-color: hsl(90, 40%, 90%);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.125), 0 0 20px rgba(0, 0, 0, 0.25);
  }
`;
