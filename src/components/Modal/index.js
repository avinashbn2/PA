import React from "react";
import PropTypes from "prop-types";
import { StyledModal, Title, Content } from "./styles";
function Modal({ open, onClose, title, children }) {
  return (
    <StyledModal
      isOpen={open}
      onBackgroundClick={onClose}
      onEscapeKeyDown={onClose}
    >
      {children}
    </StyledModal>
  );
}
Modal.Title = Title;
Modal.Content = Content;

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType(
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ),
  title: PropTypes.string,
};

export default Modal;
