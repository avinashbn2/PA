import styled from "styled-components";
import { Row } from "components/shared/styles";

export const StyledSearch = styled(Row)`
  align-items: center;
  & > svg {
    color: gray;
  }
`;
export const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 4px;
  font-size: 16px;
  padding-left: 12px;

  color: gray;
  ::placeholder {
    font-size: 16px;
    color: gray;
  }
`;
