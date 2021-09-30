import styled from "styled-components";
import { deviceMax } from "utils/device";
export const StyledLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${(p) => (p.open ? "300px 1fr" : "1fr")};
  grid-template-rows: 60px 1fr;
  grid-template-areas: ${(p) =>
    p.open ? `"sidebar header" "sidebar content"` : `"header" "content" `};

  @media ${deviceMax.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas: " header" " content";
  }
`;

export const StyledContent = styled.main`
  transition: all 0.2s;
  height: 100%;
  grid-area: content;
`;
