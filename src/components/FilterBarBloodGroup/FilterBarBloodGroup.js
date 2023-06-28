import React from "react";

const FilterBarBloodGroup = ({ handleFilter, value }) => {
  return (
    <div>
      <select value={value} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="A−">A−</option>
        <option value="O+">O+</option>
        <option value="O−">O−</option>
        <option value="B−">B−</option>
        <option value="A−">AB-</option>
      </select>
    </div>
  );
};

export default FilterBarBloodGroup;
