import React from "react";

import Langs from "../../assets/images/langs.svg";

import Tag from "../../components/Tag";
import "./Table.scss";
import Item from "./item";

const Table = ({ data, actions: { onView, onUpdate, onDelete } }) => {
  return (
    <table className="table">
      <thead className="table-header">
        <th>ID</th>
        <th>Status</th>
        <th>Nomi</th>
        <th>Rektor</th>
        <th>Manzil</th>
        <th>Qo'shilgan sana &darr;</th>
        <th>Til</th>
        <th>Boshqarish</th>
      </thead>
      <tbody className="table-body">
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>
              <Tag title={"Active"} />
            </td>
            <td>{item.title}</td>
            <td>{item.name}</td>

            <td>Somewhere</td>
            <td>{item.date}</td>
            <td>
              <img src={Langs} alt="img" />
            </td>
            <Item
            //izoh sorash====>
              {...{
                onView: () => onView(item.id),
                onDelete: () => onDelete(item.id),
                onUpdate: () => onUpdate(item.id),
              }}
              //////
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
