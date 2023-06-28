# Table with Search and Two filters 

```sh
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
```
