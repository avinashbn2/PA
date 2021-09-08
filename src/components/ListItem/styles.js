import styled from "styled-components";
import { Row } from "../shared/styles";

const fontSizes = {
  xl: "18px",
  lg: "16px",
  md: "14px",
  sm: "12px",
  xs: "10px",
};

const colors = {
  default: "#8c92ac",
  active: "#36454f",
};
export const StyledListItem = styled(Row)`
  padding: 12px;
  font-size: ${(p) => fontSizes[p.fontSize || "md"]};
  color: ${(p) => (p.active ? colors.active : colors.default)};
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bold;
  gap: 20px;
  & > svg {
    font-size: 20px;
  }
`;
