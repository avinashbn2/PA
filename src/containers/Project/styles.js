import styled from "styled-components";
import { Row } from "components/shared/styles";
import { device } from "utils/device";

export const StyledProject = styled(Row)`
  padding: 8px;
  background-color: #fefefe;
  width: 100%;
  height: 100%;
  @media ${device.mobileS} {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 18px;
    justify-content: center;
  }

  @media ${device.desktopS} {
    gap: 24px;
  }
`;
