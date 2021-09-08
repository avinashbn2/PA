import styled from "styled-components";
import { device } from "utils/device";

export const StyledLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "sidebar header" "sidebar content";
`;

export const StyledContent = styled.main`
  transition: all 0.2s;
  height: 100%;
  grid-area: content;
`;
