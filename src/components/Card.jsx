import React from "react";
import "../assets/style/Card.scss";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt="yemekFotografı" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
