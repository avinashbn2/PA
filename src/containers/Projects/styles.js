import styled from "styled-components";
import Scrollbar from "react-perfect-scrollbar";
import { Column } from "components/shared/styles";
import { getColor } from "utils/theme";

export const StyledProjects = styled(Scrollbar)`
  margin: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 180px;
  overflow-y: auto;
`;

export const StyledProject = styled(Column)`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.125), 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 1.5em;
  transition: box-shadow 0.3s linear;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  color: ${(p) => getColor(p, "main", "text")};
  background-color: ${(p) => getColor(p, "main", "secondary")};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.125), 0 0 20px rgba(0, 0, 0, 0.25);
  }
`;
