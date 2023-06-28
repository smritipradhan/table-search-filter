import React, { useEffect, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import FilterBarBloodGroup from "../FilterBarBloodGroup/FilterBarBloodGroup";
import Search from "../Search/Search";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);
  const [filterValue, setFilterValue] = useState("all");
  const [filterValueBloodGroup, setFilterValueBloodGroup] = useState("all");

  const fetchTableData = async () => {
    const fetchedTable = await fetch("https://dummyjson.com/users");
    const fetchedTableData = await fetchedTable.json();

    setTableData(
      fetchedTableData.users.map((data) => ({
        firstName: data?.firstName,
        lastName: data?.lastName,
        age: data?.age,
        bloodGroup: data?.bloodGroup,
      }))
    );
    setFilteredData(
      fetchedTableData.users.map((data) => ({
        firstName: data?.firstName,
        lastName: data?.lastName,
        age: data?.age,
        bloodGroup: data?.bloodGroup,
      }))
    );
  };

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterBloodGroup = (e) => {
    setFilterValueBloodGroup(e.target.value);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  useEffect(() => {
    let searchValue = searchVal.toLowerCase();
    let data = tableData;

    data = data.filter(
      (data) =>
        data.firstName.toLowerCase().includes(searchValue) ||
        data.lastName.toLowerCase().includes(searchValue)
    );

    if (filterValue === "greater") {
      data = data.filter((data) => data.age > 30);
    }

    if (filterValue === "less") {
      data = data.filter((data) => data?.age < 30);
    }

    if (filterValueBloodGroup && filterValueBloodGroup != "all") {
      data = data.filter((data) => data?.bloodGroup == filterValueBloodGroup);
    }

    setFilteredData(data);
  }, [filterValue, searchVal, filterValueBloodGroup]);

  if (tableData.length === 0) return <div>Loading...</div>;
  if (tableData.length !== 0)
    return (
      <div>
        Search <Search handleSearch={handleSearch} value={searchVal} />
        <br />
        Age: <FilterBar handleFilter={handleFilter} value={filterValue} />
        Blood Group:
        <FilterBarBloodGroup
          handleFilter={handleFilterBloodGroup}
          value={filterValueBloodGroup}
        />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          {filteredData &&
            Array.isArray(filteredData) &&
            filteredData.map((data) => {
              return (
                <tr>
                  <td style={{ maxWidth: "100px" }}>{data?.firstName}</td>
                  <td style={{ maxWidth: "100px" }}>{data?.lastName}</td>
                  <td style={{ maxWidth: "100px" }}>{data?.age}</td>
                  <td style={{ maxWidth: "100px" }}>{data?.bloodGroup}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
};

export default Table;
