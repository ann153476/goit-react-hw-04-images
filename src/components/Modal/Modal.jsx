import { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './modal-styles.module.css';
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={s.overlay}>
        <div className={s.modal}>
          {children}
          <span onClick={this.props.onClose} className={s.close}>
            x
          </span>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
