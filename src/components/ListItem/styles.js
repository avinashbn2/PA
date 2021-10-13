import styled from "styled-components";
import { Row } from "../shared/styles";
import { getColor } from "utils/theme";

const fontSizes = {
  xl: "18px",
  lg: "16px",
  md: "14px",
  sm: "12px",
  xs: "10px",
};

export const StyledListItem = styled(Row)`
  padding: 0.8em 4em;
  width: 300px;
  text-align: center;

  font-size: ${(p) => fontSizes[p.fontSize || "md"]};
  color: ${(p) =>
    p.active ? getColor(p, "main", "text") : getColor(p, "main", "text")};
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bold;
  gap: 20px;
  & > svg {
    font-size: 20px;
  }
  &:hover,
  &:focus {
    background-color: ${(p) => getColor(p, "light", "text")};
    border-radius: 0.5em;
  }
`;
