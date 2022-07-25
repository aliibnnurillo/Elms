import React, { useState } from "react";
import Modal from "./Modal";
import cx from "classnames";
import * as Icon from "../../components/Icon";

const Item = ({
  onView = () => {},
  onUpdate = () => {},
  onDelete = () => {},
}) => {
  const [moreisOpen, setMoreIsOpen] = useState(false);

  const toggle = () => {
    setMoreIsOpen(!moreisOpen);
  };

  console.log("toggle", moreisOpen);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <td>
        <div className="more" onClick={toggle}>
          <div className="more-icon">
            <Icon.System.More />
          </div>
          <div className={cx("dropdown", moreisOpen && "dropdown-open")}>
            <div onClick={onView} className="dropdown-item">
              <span className="batafsil">Batafsil</span>
              <Icon.System.Show />
            </div>
            <div onClick={onUpdate} className="dropdown-item">
              <span className="change">O'zgartirsh</span>
              <Icon.System.Edit />
            </div>
            {onDelete && (
              <div onClick={onDelete}>
                <span
                  className="delete"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  O'chirish
                  <Icon.System.Remove />
                </span>
              </div>
            )}
          </div>
        </div>

        {openModal && <Modal closeModal={setOpenModal} />}
      </td>
    </>
  );
};

export default Item;
