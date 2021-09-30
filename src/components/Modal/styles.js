import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: grid;
  grid-template-columns:  1fr;
  grid-template-rows: 3em 1fr 3em;
  justify-items: center;
  background-color: ${(props) => props.theme.colors.primary.light};
  opacity: 0.95;
  grid-template-areas: "title" "content" "actions";

`;

export const Title = styled.h4`
  padding: 4em 2em;
  grid-area: title;
`;

export const Content = styled.div`
  padding: 4em;
  grid-area: content;
`;
