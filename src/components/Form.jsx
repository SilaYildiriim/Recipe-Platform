import React, { useState } from "react";

const Form = ({ yemekEkle, recipes }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    yemekEkle({
      id: recipes[recipes.length - 1].id + 1,
      title: title,
      image: image,
      description: description,
    });

    setTitle("");
    setImage("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Recipe Image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <input
        type="text"
        placeholder="Recipe Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="submit" value="Add Recipe" />
    </form>
  );
};

export default Form;
