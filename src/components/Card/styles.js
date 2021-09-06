import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  border-radius: 4px;
  width: 200px;
  height: 160px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  cursor: pointer;
  padding: 4px;
  padding-top: 8px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 2px 2px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 8px 8px 16px 8px;
  width: fill-available;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  padding: 8px;
  & > svg {
    color: #cecece;
  }
`;

export const StyledContent = styled.div`
  padding: 12px 8px;
  height: calc((100%) - 110px);
`;
