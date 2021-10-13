import styled from "styled-components";
import { getColor } from "utils/theme";
import { Row } from "components/shared/styles";

export const StyledPopupMenu = styled.div`
  position: absolute;
  top: ${(p) => p.anchor.top}px;
  left: ${(p) => p.anchor.left}px;
  background-color: ${(p) => getColor(p, "main", "secondary")};
  background-color: black;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1000;
  border-radius: 0.5em;
  overflow: hidden;
`;

export const StyledPopupMenuItem = styled(Row)`
  padding: 1em;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5em;
  &:hover {
    cursor: pointer;
    background-color: ${(p) => getColor(p, "dark", "secondary")};
  }
  & > svg {
    color: ${(p) => getColor(p, "light", "text")};
    color: white;
  }
  color: white;
`;
