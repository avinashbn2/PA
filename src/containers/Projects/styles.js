import styled from "styled-components";
import Scrollbar from "react-perfect-scrollbar";
import { Column, Form } from "components/shared/styles";
import { getColor } from "utils/theme";

export const StyledProjects = styled(Scrollbar)`
  margin: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(16em, 20em));
  grid-auto-rows: min-content;

  justify-content: center;
  overflow-y: auto;
`;

export const StyledProject = styled(Column)`
  position: relative;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.125), 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 2em;
  transition: box-shadow 0.3s linear;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  justify-content: space-between;
  color: ${(p) => getColor(p, "main", "text")};

  background-color: ${(p) => getColor(p, "main", "secondary")};
  & > svg {
    position: absolute;
    right: 1em;
    top: 1em;
    visibility: hidden;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.125), 0 0 20px rgba(0, 0, 0, 0.25);
    & > svg {
      visibility: visible;
    }
  }
  gap: 1em;
`;

export const StyledProjectForm = styled(Form)``;
