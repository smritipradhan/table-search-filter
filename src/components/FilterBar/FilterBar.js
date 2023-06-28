import React from "react";

const FilterBar = ({ handleFilter, value }) => {
  return (
    <div>
      <select value={value} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="greater">Age &gt; 30</option>
        <option value="less">Age &lt; 30</option>
      </select>
    </div>
  );
};

export default FilterBar;
