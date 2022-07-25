import React from "react";
import "./Button.scss";
import cx from "classnames";

const Button = ({
  icon,
  title,
  variant = "white",
  onClick,
  none,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={cx("btn", variant && `btn--variant-${variant}`)}
      onClick={onClick}
    >
      <div className="btn-title">{title}</div>
      <div className={cx("btn-suffix-icon", none && `btn-suffix-icon-${none}`)}>
        {icon}
      </div>
    </button>
  );
};

export default Button;
