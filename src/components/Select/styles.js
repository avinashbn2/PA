import styled from "styled-components";
import { Row } from "../shared/styles";
import { getColor } from "utils/theme";
export const StyledSelect = styled.div`
  position: relative;
  width: fit-content;
  transition: all 0.3s;
  --height: 1.3em;
  --width: 10em;
  --padding: 0.5em 0.75em;
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
  padding: var(--padding);
  font-size: 1em;
  background-color: ${(p) =>
    p.active
      ? getColor(p, "main", "secondary")
      : getColor(p, "light", "secondary")};
  list-style-type: none;
  cursor: pointer;
  color: black;
  &:hover {
    opacity: 0.8;
    outline: 2px solid ${(p) => getColor(p, "dark", "secondary")};
  }
`;

export const Selected = styled(Row)`
  padding: var(--padding);
  cursor: pointer;
  color: black;
  width: var(--width);
  background-color: ${(p) => getColor(p, "light", "secondary")};
  border-radius: 0.25em;
  justify-content: space-between;
  & > svg {
    font-size: 1em;
    color: black;
  }
`;
