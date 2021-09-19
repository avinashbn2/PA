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
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: ${(p) => fontSizes[p.fontSize]};
  background-color: ${(p) => p.theme.colors[p.color].main};
  color: black;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: 400;

  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;
