import Button from "../../components/Button/Button";

import Topbar from "../../components/Topbar";
import * as Icon from "../../components/Icon";

import { React, useEffect, useState } from "react";
import "./O'quvDasturi.scss";
import Table from "../../components/Table";
import { useHistory } from "react-router-dom";
import Search from "../../components/Search";
import ModalDastur from "./ModalDastur";

const University = () => {
  const getDatafromLS = () => {
    const data = localStorage.getItem("values");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };
  const history = useHistory();

  const onView = (id) => {
    history.push("/universities/view/" + id);
  };

  const onUpdate = (id) => {
    history.push("/universities/update/" + id);
  };
  // const onDelete = (id) => {
  //   history.push("/universities/delete/" + id);
  // };
  ///////////////////////////////////////////
  // const [change, setChange] = useState(
  //   JSON.parse(localStorage.getItem("change"))
  // );

  // useEffect(() => {
  //   localStorage.setItem("change", JSON.stringify(change));
  //   console.log(change);
  // }, [change]);

  // useEffect(() => {
  //   const change = JSON.parse(localStorage.getItem("change"));
  //   if (change) {
  //     setChange(change);
  //   }
  // }, []);
  // const toggle = () => setChange(!change);
  const [openModalEducation, setOpenModalEducation] = useState(false);
  return (
    <div className="container">
      <div className="content">
        <div className="universitet">
          <h2 className="universitet-text">O'quv dasturlari</h2>
          <div className="universitet-btn">
            <div>
              <Search />
            </div>
            <Button
              title={"Dastur qo'shish"}
              icon={<Icon.System.Add />}
              variant="blue"
              onClick={() => {
                setOpenModalEducation(true);
              }}
            />
          </div>
        </div>
        <div className="content-inner">
          <div className="tb">
            <div>
              <Table
                data={getDatafromLS() || []}
                actions={{
                  onView,
                  onUpdate,
                  // onDelete,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {openModalEducation && (
        <ModalDastur closeModalEducation={setOpenModalEducation} />
      )}
    </div>
  );
};

export default University;
