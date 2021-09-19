import styled from "styled-components";
import { Column } from "components/shared/styles";
import { getColor } from "utils/theme";

const fontSizes = {
  xl: "18px",
  lg: "16px",
  md: "14px",
  sm: "12px",
  xs: "10px",
};

export const StyledInput = styled(Column)`
  padding: 8px;
  justify-content: flex-start;
  align-items: flex-start;

  & > input {
    border: none;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: ${(p) => fontSizes[p.fontSize]};
    background-color: ${(p) => (p.error ? "salmon" : "rgb(243, 243, 244)")};
    letter-spacing: 0.03em;
    transition: all 100ms;

    &:hover {
      box-shadow: 0 0 0 4px ${(p) => getColor(p, "light", "secondary")};
      background-color: white;
    }

    &:focus {
      border: none;
      outline: none;
      box-shadow: 0 0 0 4px ${(p) => getColor(p, "main", "secondary")};
    }
  }
`;

export const StyledLabel = styled.label`
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  font-size: 14px;
  padding: 8px 4px;
`;
