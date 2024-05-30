import React from "react";
import Card from "./Card";
import "../assets/style/CardList.scss";

const CardList = ({ recipes }) => {
  return (
    <div className="card-list">
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default CardList;
