import styled from "styled-components";
import { Text } from "../shared/styles";

export const StyledCard = styled.div`
  position: relative;
  background-color: white;
  border-radius: 4px;
  height: fit-content;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  cursor: pointer;
  padding: 4px;
  padding-top: 8px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 2px 2px 8px rgba(0, 0, 0, 0.25);
  }

  display: grid;
  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr;

  grid-template-areas: "header" "content " "footer";
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  padding: 8px 8px 16px 8px;
  width: fill-available;
  grid-area: footer;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  padding: 8px;
  grid-area: header;
  & > svg {
    color: #cecece;
  }
`;

export const StyledContent = styled.div`
  padding: 12px 8px;
  // height: 100%;
  grid-area: content;
`;

export const CardTitle = styled(Text)`
  display: block;
  padding: 10px 0px 8px 0px;
  font-weight: bold;
  position: relative;
`;
