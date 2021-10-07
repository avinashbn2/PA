import styled from "styled-components";
import { device } from "utils/device";
import Scrollbar from "react-perfect-scrollbar";
import { Form } from "components/shared/styles";

export const StyledProject = styled(Scrollbar)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 8px;
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
    height: calc(100% - 10em);
  }
`;

export const StyledTaskForm = styled(Form)``;
