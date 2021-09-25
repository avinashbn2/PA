import styled from "styled-components";
import { device } from "utils/device";
import Scrollbar from "react-perfect-scrollbar";

export const StyledProject = styled(Scrollbar)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 8px;
  background-color: #fefefe;
  height: 100%;
  overflow-x: scroll;

  width: 100%;
  @media ${device.mobileS} {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 18px;
    justify-content: center;
  }

  @media ${device.desktopS} {
    flex-direction: row;
    gap: 18px;
    justify-content: flex-start;
    gap: 24px;
  }
`;
