import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../assets/style/Form.scss";

const Form = () => {
  const { addRecipe, recipes, isLoading } = useContext(DataContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState({
    title: false,
    image: false,
    description: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && image.trim() && description.trim()) {
      addRecipe({
        id: (Number(recipes[recipes.length - 1].id) + 1).toString(),
        title: title,
        image: image,
        description: description,
      });
      setError({
        title: false,
        image: false,
        description: false,
      });
    } else {
      setError({
        title: !title.trim(),
        image: !image.trim(),
        description: !description.trim(),
      });
    }

    setTitle("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formAddRecipe">
        <h3>ADD RECIPE</h3>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {error.title && <p>Recipe Title can not be empty!</p>}
        <input
          type="text"
          placeholder="Recipe Image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        {error.title && <p>Recipe Title can not be empty!</p>}
        <input
          type="text"
          placeholder="Recipe Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {error.title && <p>Recipe Title can not be empty!</p>}
        <button type="submit">
          {isLoading.add ? "Loading" : "Add Recipe"}
        </button>
      </form>
    </div>
  );
};

export default Form;
