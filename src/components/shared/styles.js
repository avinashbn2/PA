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

export const Error = styled.span`
  color: red;
  font-size: 0.7em;
  padding: 4px;
  letter-spacing: 0.03em;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledPaper = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 0.25em rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  padding: 4em 2em;
  &:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 1em rgba(0, 0, 0, 0.1);
  }
`;
