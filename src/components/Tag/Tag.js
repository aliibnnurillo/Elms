import React from "react";
import "./Tag.scss";
import cx from "classnames";

const Tag = ({ title, variant }) => {
  return <div className={cx("tag", variant && `tag--${variant}`)}>{title}</div>;
};

export default Tag;
