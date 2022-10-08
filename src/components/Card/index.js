import React, { useState } from "react";
import "./Card.styles.css";

const Card = ({ data }) => {
  const [cardData, setCardData] = useState(data);
  const [editing, setEditing] = useState(false);
  let tempData = cardData;

  const handleOnChange = (e, field) => {
    if (field === "city" || field === "state") {
      tempData.location[field] = e.target.value;
    }

    if (field === "first" || field === "last") {
      tempData.name[field] = e.target.value;
    }
    tempData[field] = e.target.value;
  };

  const Input = ({ defaultValue, name }) => (
    <input
      defaultValue={defaultValue}
      onChange={(e) => handleOnChange(e, name)}
      className="input-field"
    />
  );

  const handleSave = () => {
    setCardData(tempData);
    setEditing(false);
  };

  return editing ? (
    <div className="card-container">
      <div
        style={{
          width: "100%",
          textAlign: "center",
          paddingTop: "24px",
          paddingBottom: "24px",
          background: "#0d6efd"
        }}
      >
        <Input defaultValue={`${cardData.name.first}`} name="first" />
        <Input defaultValue={`${cardData.name.last}`} name="last" />
      </div>
      <div className="card-header">
        <img
          className="card-image"
          src={cardData.picture.medium}
          alt={cardData.name.first}
        />
      </div>
      <div className="card-title-container" style={{ padding: "24px" }}>
        <Input defaultValue={`${cardData.email}`} name="email" />
        <Input defaultValue={`${cardData.phone}`} name="phone" />
        <Input defaultValue={`${cardData.location.city}`} name="city" />
        <Input defaultValue={`${cardData.location.state}`} name="state" />
      </div>
      <button style={{ width: "50px", margin: "8px" }} onClick={handleSave}>
        Save
      </button>
    </div>
  ) : (
    <div className="card-container">
      <div
        style={{
          background: "#0d6efd",
          width: "100%",
          borderRadius: "10px 10px 0 0"
        }}
      >
        <button
          style={{ margin: "8px", cursor: "pointer" }}
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </div>
      <div className="back-header">
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingBottom: "24px",
            background: "#0d6efd"
          }}
        >
          <span className="card-name">
            {cardData.name.first} {cardData.name.last}
          </span>
        </div>

        <div className="card-header">
          <img
            className="card-image"
            src={cardData.picture.medium}
            alt={cardData.name.first}
          />
        </div>
      </div>

      <div className="card-content">
        <span className="card-fields">{cardData.email}</span>
        <span className="card-fields">{cardData.phone}</span>
        <span className="card-fields">
          {cardData.location.city}, {cardData.location.state}
        </span>
      </div>
    </div>
  );
};

export default Card;
