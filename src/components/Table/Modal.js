import React from "react";
import Button from "../Button/Button";

import "./Modal.scss";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="darkBG" onClick={() => closeModal(false)} />
      <div className="modal-box">
        <div className="modal-title">Are you sure you want to Delete?</div>
        <div className="modal-btn">
          <Button
            title={"Cancel"}
            none={"none"}
            onClick={() => closeModal(false)}
          />
          <Button variant="blue" none={"none"} title={"Delete"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
