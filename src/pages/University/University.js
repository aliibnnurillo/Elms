import Button from "../../components/Button/Button";

import Topbar from "../../components/Topbar";
import * as Icon from "../../components/Icon";

import { React, useEffect, useState } from "react";
import "./University.scss";
import Table from "../../components/Table";
import { useHistory } from "react-router-dom";
import Search from "../../components/Search";

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

  return (
    <div className="container">
      <div className="content">
        <div className="universitet">
          <h2 className="universitet-text">Universitetlar</h2>
          <div className="universitet-btn">
            <div>
              <Search />
            </div>
            <Button
              title={"Universitet qo'shish"}
              icon={<Icon.System.Add />}
              variant="blue"
              onClick={() => history.push("/adduniversitet")}
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

        <div className="pagination">
          <div className="pagination-left">
            <Button icon={<Icon.System.First />} />
            <Button icon={<Icon.System.Left />} />
          </div>
          <div className="num">
            <h4>1</h4>
            <h4>2</h4>
            <h4>3</h4>
            <h4>4</h4>
          </div>
          <div className="pagination-right">
            <Button icon={<Icon.System.First />} />
            <Button icon={<Icon.System.Left />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
