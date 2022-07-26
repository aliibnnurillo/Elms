import React, { useEffect, useState } from "react";
import "./ViewUniversity.scss";

import Button from "../../components/Button/Button";
import { useHistory, useParams } from "react-router-dom";

const AddUniversity = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  //eslint-disable-next-line
  const tables = JSON.parse(localStorage.getItem("tables")) || [];

  useEffect(() => {
    if (!tables) return;

    localStorage.setItem("tables", JSON.stringify(tables));

    // qidirib topish
    const foundItem = tables.find((item) => Number(item.id) === Number(id));

    // topilmasa chiqib ketish
    if (!foundItem) return;

    // topilsa single ga set qilish
    setSingle(foundItem);
  }, [id, tables]);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setTitle(single.title || "");
    setName(single.name || "");
    setDate(single.date || "");
  }, [single]);

  const history = useHistory();

  return (
    <div className="container-universitet">
      <div className="universitet">
        <div className="text-universitet">Universitet view</div>
        <div className="adduniversitet-btn">
          <Button
            onClick={() => history.push("/universities")}
            title={"Cancel"}
            none={"none"}
            variant={"background"}
          />
        </div>
      </div>

      <div className="form">
        <div className="form-inner-view">
          <div>
            <span>Universitet nomi :</span>
            <span> {title}</span>
          </div>
          <div>
            <span>Rektor nomi :</span>
            <span> {name}</span>
          </div>
          <div>
            <span>Sana :</span>
            <span> {date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUniversity;
