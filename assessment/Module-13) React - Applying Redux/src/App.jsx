import React, { useState } from "react";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  const appStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
    height: "100vh"
  };
  return (
    <div style={appStyles}>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch}  />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> 
        ))}
    </div>
  );
}

export default App;
