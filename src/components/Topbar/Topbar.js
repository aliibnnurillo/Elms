import React from "react";
import Button from "../Button/Button";
import Avatar from "../../assets/images/avatar.svg";
import * as Icon from "../Icon";

const Topbar = () => {
  return (
    <div>
      <div className="content-header">
        <div>
          <Button title={"Data Science Faculty"} />
        </div>
        <div className="topbar">
          <div className="help-icon">
            <Icon.System.Help />
          </div>
          <div className="bell-icon">
            <Icon.System.Bell />
          </div>
          <div className="user">
            <div className="user-text">
              <h2 className="user-name">Abduxamid</h2>
              <h2 className="user-level">Admin</h2>
            </div>
            <img src={Avatar} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
