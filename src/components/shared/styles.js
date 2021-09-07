import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: ${(p) => p.justify || "flex-start"};
  align-items: ${(p) => p.align || "center"};
  background-color: ${(p) => p.bgColor};
`;

export const Column = styled(Row)`
  flex-direction: column;
`;
export const Text = styled.span`
  padding: 0px 4px;
`;
