import styled from "styled-components";
import { Column } from "../shared/styles";
import { device } from "utils/device";

export const StyledSidebar = styled(Column)`
  padding: 6em 0;
  grid-area: sidebar;
  align-items: flex-start;

  height: 100%;
  box-shadow: 0px 1px 2px #bccac1, 0px 1px 2px #bccac1;

  & > h1 {
    padding-bottom: 80px;
  }

  @media ${device.desktopS} {
    display: flex;
    align-items: flex-start;

    height: 100%;
    box-shadow: 0px 1px 2px #bccac1, 0px 1px 2px #bccac1;

    & > h1 {
      padding-bottom: 80px;
    }
  }

  & > svg {
    font-size: 24px;
    color: gray;
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 20px;
  }
`;
export const StyledRoutes = styled(Column)`
  display: ${(p) => (p.open ? "flex" : "none")};
  align-items: flex-start;
`;
