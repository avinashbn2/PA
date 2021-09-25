import styled from "styled-components";
import { Column, Form } from "components/shared/styles";
import { getColor } from "utils/theme";
export const StyledAuth = styled.div`
  display: grid;
  place-items: center;
  height: 80%;
`;
export const Container = styled.div`
  display: grid;
  width: 60em;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.25em;
  overflow: hidden;
  height: fill-available;
  position: relative;
  background-color: ${(p) => getColor(p, "main", "secondary")};
`;

export const StyledLoginForm = styled(Form)`
  display: grid;
  align-items: center;
  grid-template-rows: repeat(3, 5em);
  grid-template-columns: 1fr;
`;

export const StyledSignupForm = styled(StyledLoginForm)`
  grid-template-rows: repeat(4, 5em);
`;
export const Wrapper = styled.div`
  background-color: #fff;
  padding: 10em 8em;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    height: 100%;
    width: 1px;
    // background-color: ${(p) => getColor(p, "dark", "secondary")};
    box-shadow: inset 0px 0px 0px 2px ${(p) => getColor(p, "dark", "secondary")};
    filter: blur(2px);
  }
`;
export const StyledSignup = styled(Column)`
  align-items: center;
`;
