import React from "react";
import "../assets/style/Card.scss";

const Card = ({ id, image, title, description, yemekSil }) => {
  return (
    <div className="card">
      <button onClick={() => yemekSil(id)}>Sil</button>
      <img src={image} alt="yemekFotografı" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
