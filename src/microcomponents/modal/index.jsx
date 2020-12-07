import React from 'react';
import { Modal as CoreModal } from 'antd';

function Modal({ children, ...props }) {
  return <CoreModal {...props}>{children}</CoreModal>;
}

export default Modal;
