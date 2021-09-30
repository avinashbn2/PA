import styled from "styled-components";
import { Row, Text } from "../shared/styles";
import Scrollbar from "react-perfect-scrollbar";

const colors = {
  default: "#8c92ac",
  active: "#36454f",
};
export const Container = styled.section`
  height: 100%;
  border-radius: 8px;
  padding: 8px 12px;
  padding-bottom: 40px;
  width: 250px;
  min-width: 250px;
  background-color: #f5f9fa;
  color: ${colors.active};
  overflow: hidden;

  &:selection {
    background-color: aqua;
  }
`;
export const StyledSection = styled(Scrollbar)`
  display: flex;

  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 100px);

  user-select: none;
`;
export const SectionHeader = styled(Row)`
  background-color: #f2f2f4;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  border-radius: 8px;
  height: 24px;
`;
export const SectionTitle = styled(Text)`
  font-weight: bold;
  font-size: 12px;
`;
