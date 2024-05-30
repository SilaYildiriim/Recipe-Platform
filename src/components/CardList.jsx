import React from "react";
import Card from "./Card";
import "../assets/style/CardList.scss";

const CardList = ({ recipes, yemekSil }) => {
  return (
    <div className="card-list">
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} yemekSil={yemekSil} />
      ))}
    </div>
  );
};

export default CardList;
