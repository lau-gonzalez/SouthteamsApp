import React, { useContext, useState } from "react";
import { sortData } from "../../utils";
import { DataContext } from "../DataContext";
import "./Sort.styles.css";

const Sort = () => {
  const [data, setData] = useContext(DataContext);
  const [sortByValue, setSortByValue] = useState("name");
  const [order, setOrder] = useState("ascending");

  const handleSortByChange = (e) => {
    setSortByValue(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const sortCards = () => {
    const newCards = sortData(sortByValue, order, data);
    if (newCards.length) {
      console.log("new", newCards);
      setData(() => [...newCards]);
    }
  };

  return (
    <div className="sort-container">
      <div className="selectors-container">
        <span className="label">Sort By:</span>
        <select value={sortByValue} onChange={handleSortByChange}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="city">City</option>
        </select>
      </div>

      <div className="selectors-container">
        <span className="label">Order:</span>
        <select value={order} onChange={handleOrderChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <button
        style={{ marginLeft: "16px", cursor: "pointer" }}
        onClick={sortCards}
      >
        Sort
      </button>
    </div>
  );
};

export default Sort;
