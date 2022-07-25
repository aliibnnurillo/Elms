import React from "react";
import "./AddUniversity.scss";

import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

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

  if (!values.date) {
    errors.date = "Iltimos sanani kiriting";
  } else if (values.date.length < 7) {
    errors.date = "";
  }

  return errors;
};

const AddUniversity = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ title: "", directorName: "", date: "" }}
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
          <form className="form">
            <div className="container-universitet">
              <div className="universitet">
                <div className="text-universitet">Universitet qo'shish</div>
                <div className="adduniversitet-btn">
                  <Button
                    onClick={() => history.push("/universities")}
                    title={"Bekor qilish"}
                    none={"none"}
                    variant={"background"}
                  />
                  <Button
                    type="submit"
                    variant="blue"
                    none={"none"}
                    title={"Saqlash"}
                  />
                </div>
              </div>

              <div className="switcher">
                <div class="wrapper">
                  <div class="taeb-switch left text-center">
                    <div class="taeb active" taeb-direction="left">
                      Actve
                    </div>
                    <div class="taeb" taeb-direction="right">
                      O'chirilgan
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-inner">
                <Input
                  variant={"add"}
                  type={"text"}
                  name="title"
                  required
                  title={"Universitet nomi"}
                  placeholder={"Nomini yozing"}
                />
                <Input
                  variant={"add"}
                  type={"text"}
                  required
                  name="directorName"
                  title={"Rector FIO"}
                  placeholder={"Rector ismini yozing"}
                />
                <Input
                  variant={"add"}
                  type={"date"}
                  required
                  title={"Sana"}
                  name="date"
                  placeholder={"Sanani kiriting"}
                />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddUniversity;
