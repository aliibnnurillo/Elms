import React from "react";
import Button from "../Button/Button";
import * as Icon from "../Icon";
import { Formik } from "formik";
import { Field, Form, ErrorMessage } from "formik";
// import { Input } from "@mui/material";
import Input from "../Input";

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
