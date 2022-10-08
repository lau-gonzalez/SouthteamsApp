import React, { useEffect, useState } from "react";
import "./Search.styles.css";
import searchIcon from "../../assets/search.jpg";

const Search = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!inputValue) {
      setSearchValue("");
    }
  }, [inputValue]); //eslint-disable-line

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchValue(inputValue);
    }
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    setSearchValue(inputValue);
  };

  return (
    <div className="search-container">
      <input
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        className="search-input"
        type="text"
      />
      <img
        className="search-icon"
        src={searchIcon}
        onClick={handleOnClick}
        alt="search"
      />
    </div>
  );
};

export default Search;
