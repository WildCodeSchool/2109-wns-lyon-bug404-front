import "./Modal.css";

import React, { ReactChildren, ReactChild } from "react";

interface AuxProps {
  children: ReactChild | ReactChildren;
  handleClose: () => void;
}
const Modal = ({ children, handleClose }: AuxProps) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
