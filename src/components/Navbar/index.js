import React from "react";
import Search from "../SearchInput";
import "./Navbar.styles.css";

const Navbar = ({ setSearchValue, setOpenFilterSection }) => {
  return (
    <div className="navbar-container">
      <h1>CardListApp</h1>
      <Search
        setSearchValue={setSearchValue}
        setOpenFilterSection={setOpenFilterSection}
      />
    </div>
  );
};

export default Navbar;
