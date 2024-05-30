import React from "react";
import "../assets/style/Diger.scss";
import Form from "./Form";

const Diger = () => {
  return (
    <div className="digerleri">
      <h1>Welcome to the Recipe Sharing Platform</h1>
      <p>Find and share best recipes from around the world!</p>
      <Form />
    </div>
  );
};

export default Diger;
