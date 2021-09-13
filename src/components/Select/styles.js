import styled from "styled-components";
import { Row } from "../shared/styles";

export const StyledSelect = styled.div`
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  transition: all 0.3s;
  --height: 2.4em;
  --width: 10em;
`;
export const UL = styled.ul`
  padding: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  transform: translate(0, var(--height));
`;
export const Option = styled.li`
  padding: 1em 2em;
  font-size: 1em;
  background-color: ${(p) =>
    p.active ? "hsl(200, 100%, 40%)" : "hsl(200, 100%, 45%)"};
  list-style-type: none;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: hsl(200, 100%, 55%);
  }
`;

export const Selected = styled(Row)`
  padding: 1em;
  cursor: pointer;
  font-weight: bold;
  color: white;
  width: var(--width);
  background-color: hsl(200, 100%, 50%);
  border-radius: 0.25em;
  justify-content: space-between;
  & > svg {
    font-size: 1em;
    color: white;
  }
`;
