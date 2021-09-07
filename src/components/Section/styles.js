import styled from "styled-components";
import { Column, Row, Text } from "../shared/styles";

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
export const Container = styled.section`
  height: 100%;
  border-radius: 8px;
  padding: 8px 12px;
  width: fit-content;
  min-width: 250px;
  background-color: #f5f9fa;
  color: ${colors.active};

  &:selection {
    background-color: aqua;
  }
`;
export const StyledSection = styled(Column)`
  gap: 20px;
  align-items: flex-start;
  padding-top: 8px;
`;
export const SectionHeader = styled(Row)`
  background-color: #f2f2f4;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  border-radius: 8px;
`;
export const SectionTitle = styled(Text)`
  font-weight: bold;
  font-size: 12px;
`;
