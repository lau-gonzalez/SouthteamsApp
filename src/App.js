import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CardsList from "./components/CardsList";
import Sort from "./components/Sort";
import { DataContext } from "./components/DataContext";
import axios from "axios";

const App = () => {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getCards = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=20");
      setCards(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []); //eslint-disable-line

  return (
    <DataContext.Provider value={[data, setData]}>
      <Navbar setSearchValue={setSearchValue} />
      <Sort />
      <CardsList searchValue={searchValue} cards={cards} />
    </DataContext.Provider>
  );
};

export default App;
