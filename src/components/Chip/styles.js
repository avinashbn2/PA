import styled from "styled-components";
import { Row } from "../shared/styles";

const fontSizes = {
  xl: "18px",
  lg: "16px",
  md: "14px",
  sm: "12px",
  xs: "10px",
};

export const StyledChip = styled(Row)`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: ${(p) => fontSizes[p.fontSize]};
  background-color: ${(p) => p.color};
  color: white;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bold;
  gap: 4px;
`;
