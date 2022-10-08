import React, { useContext, useEffect } from "react";
import Card from "../Card";
import "./CardsList.styles.css";
import { filterCards } from "../../utils";
import { DataContext } from "../DataContext";

const CardsList = ({ searchValue, cards }) => {
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    if (data.length && searchValue) {
      const newCards = filterCards(data, searchValue);
      setData(newCards);
    }

    if (!searchValue) {
      setData(cards);
    }
  }, [searchValue, cards]); //eslint-disable-line

  return (
    <div className="container">
      <div className="cards-container">
        {!!data.length &&
          data.map((card) => <Card key={card.email} data={card} />)}
      </div>
    </div>
  );
};

export default CardsList;
