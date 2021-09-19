import styled from "styled-components";
import { Row } from "../shared/styles";

export const StyledChip = styled(Row)`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  background-color: ${(p) => p.theme.colors.secondary.main};
  color: black;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bold;
  gap: 4px;
`;
