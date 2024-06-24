import React, { useContext } from "react";
import "../assets/style/Navi.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navi = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav>
        <div className="logo-baslik">
          {/* <img src={Brand} alt="brand" /> */}
          <h3>Recipe Platform</h3>
        </div>
        <ul>
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="addRecipe">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profıle</NavLink>
          </li>
          <button
            className="button"
            onClick={isAuthenticated ? handleLogout : handleLogin}
          >
            {isAuthenticated ? "Logout" : "Logın"}
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navi;
