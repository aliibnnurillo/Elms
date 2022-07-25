import Input from "../../components/Input";
import { Formik } from "formik";
import React from "react";
import * as Icon from "../../components/Icon";
import Button from "../../components/Button";
import "./ModalDastur.scss";
import Textarea from "../../components/Textarea";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Iltimos,universitet nomini kiriting";
  } else if (values.title.length > 15) {
    errors.title = "Must be 15 characters or less";
  }

  if (!values.directorName) {
    errors.directorName = "Required !";
  } else if (values.directorName.length < 4) {
    errors.directorName = "Iltimos ismni to'g'ri kiriting";
  }
  if (!values.text) {
    errors.textarea = "Iltimos ma'lumot kiriting";
  } else if (values.textarea.length < 7) {
    errors.textarea = "";
  }

  return errors;
};

const ModalDastur = ({ closeModalEducation }) => {
  return (
    <div className="darkbg">
      <div className="dastur-modal-box">
        <div className="dastur-modal-form-menu">
          <div className="dastur-modal-form-menu-info">
            <div className="dastur-modal-form-menu-info-icon">
              <Icon.System.Info />
            </div>
            <span className="dastur-modal-form-menu-info-text">Ma'lumot</span>
          </div>
          <div className="dastur-modal-form-menu-doc">
            <div className="dastur-modal-form-menu-doc-icon">
              <Icon.System.Docs />
            </div>
            <span className="dastur-modal-form-menu-doc-text">Dasturlar</span>
          </div>
        </div>
        <div
          className="dastur-modal-close"
          onClick={() => closeModalEducation(false)}
        >
          <Icon.System.Close />
        </div>
        <div className="dastur-modal-panel">
          <Formik
            initialValues={{
              title: "",
              directorName: "",
              textarea: "",
            }}
            validate={validate}
            onSubmit={(values) => {
              const oldItems = JSON.parse(localStorage.getItem("tables")) || [];

              const newItems = [...oldItems, values];
              localStorage.setItem("tables", JSON.stringify(newItems));
            }}
          >
            {({ values, errors }) => {
              console.log("form values = ", values, errors);
              return (
                <form className="form-modal">
                  <div className="container-universitet">
                    <div>
                      <div className="dastur-modal-text">
                        O'quv dasturini qo'shish
                      </div>
                    </div>

                    <div className="form-inner">
                      <div className="form-group">
                        <div className="dastur-modal-panel-form">
                          <Input
                            variantlabel={"padding"}
                            type={"text"}
                            name="title"
                            required
                            title={"Universitet nomi"}
                            placeholder={"Nomini yozing"}
                          />
                          <Input
                            type={"text"}
                            required
                            name="directorName"
                            title={"Rector FIO"}
                            placeholder={"Rector ismini yozing"}
                          />

                          <Textarea
                            title={"Qisqacha malumot"}
                            placeholder={"Toliq malumot kiriting"}
                            type={"textarea"}
                            required
                            variant={"field"}
                            name="textarea"
                          />
                          <Textarea
                            title={"Talabalar"}
                            placeholder={"Toliq malumot kiriting"}
                            type={"textarea"}
                            required
                            variant={"field"}
                            name="textarea"
                          />
                        </div>
                      </div>
                      <div className="dastur-modal-panel-form-full">
                        <Textarea
                          name="textarea"
                          placeholder={"Toliq malumot kiriting"}
                          type={"textarea"}
                          variant={"add"}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
        <div className="modal-footer">
          <div className="modal-footer-icon">
            <Icon.System.Settings />
          </div>
          <Button title={"Bekor qilish"} none={"none"} variant={"margin"} />
          <Button
            title={"Saqlash"}
            none={"none"}
            variant={"blue"}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDastur;
