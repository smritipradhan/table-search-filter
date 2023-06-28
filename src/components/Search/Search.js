import React from "react";

const Search = ({ handleSearch, value }) => {
  return <input onChange={handleSearch} value={value} />;
};

export default Search;
