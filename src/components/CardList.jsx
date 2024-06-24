import React, { useContext } from "react";
import Card from "./Card";
import "../assets/style/CardList.scss";
import { DataContext } from "../context/DataContext";

const CardList = () => {
  const { recipes, isLoading } = useContext(DataContext);
  return (
    <div className="card-list">
      {isLoading.read && <p>Loading</p>}
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default CardList;
