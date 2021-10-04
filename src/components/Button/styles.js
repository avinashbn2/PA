import styled from "styled-components";

const fontSizes = {
  xl: "18px",
  lg: "16px",
  md: "14px",
  sm: "12px",
  xs: "10px",
};

export const StyledButton = styled.button`
  outline: none;
  padding: 0.5em 3em;
  border-radius: 8px;
  border: none;
  font-size: ${(p) => fontSizes[p.fontSize]};
  background-color: ${(p) => p.theme.colors[p.color].main};
  color: black;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: 400;
  width: ${(p) => p.fullWidth && "100%"};
  display: flex;
  justify-content: center;
  gap: 8px;
  border-bottom: 4px solid ${(p) => p.theme.colors[p.color].dark};
  &:active {
    margin-top: 2px;
    border-bottom: 2px solid ${(p) => p.theme.colors[p.color].dark};
  }
`;
