import React from "react";
import "../assets/style/Navi.scss";
import Brand from "../assets/img/brand.jpg";

const Navi = () => {
  return (
    <nav>
      <div className="logo-baslik">
        {/* <img src={Brand} alt="brand" /> */}
        <h3>Recipe Platform</h3>
      </div>
      <ul>
        <li>Home</li>
        <li>Add Recipe</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navi;
