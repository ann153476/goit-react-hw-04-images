import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from '../styles.module.css';
const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  const handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleClose);
  });

  return createPortal(
    <div className={s.Modal}>
      <div onClick={handleClose} className={s.Overlay}>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
