import React from "react";

import "./Search.scss";
import * as Icon from "../Icon";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search-input"></input>
      <div className="search-icon">
        <Icon.System.Search />
      </div>
    </div>
  );
};

export default Search;
