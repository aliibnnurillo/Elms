import React from "react";
import "./Item.scss";
import { NavLink } from "react-router-dom";

const Item = ({ icon, title, link, activeClassName, isOpen = true }) => {
  return (
    <NavLink
      activeClassName={activeClassName}
      style={{
        width: isOpen ? "100%" : "44px",
        justifyContent: isOpen ? "flex-start" : "center",
      }}
      to={link}
      className="menu-item"
      exact
    >
      <div className="menu-item-prefix-icon">{icon}</div>
      <div
        style={{
          display: isOpen ? "flex" : "none",
        }}
        className="menu-item-text"
      >
        {title}
      </div>
    </NavLink>
  );
};

export default Item;
