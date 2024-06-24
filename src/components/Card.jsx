import React, { useContext, useState } from "react";
import "../assets/style/Card.scss";
import { DataContext } from "../context/DataContext";

const Card = ({ id, image, title, description }) => {
  const { deleteRecipe, updateRecipe, isLoading } = useContext(DataContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({ title, description, image });
  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateRecipe(id, updateData);
    setIsUpdate(false);
  };

  return (
    <div className="card">
      {isUpdate ? (
        <div className="updateform">
          <p>Title</p>
          <input
            type="text"
            name="title"
            value={updateData.title}
            onChange={handleUpdateChange}
          />
          <p>Description</p>
          <input
            type="text"
            name="description"
            value={updateData.description}
            onChange={handleUpdateChange}
          />
          <p>Image</p>
          <input
            type="text"
            name="image"
            value={updateData.image}
            onChange={handleUpdateChange}
          />
          <button onClick={handleUpdate} className="formUpdate">
            Update
          </button>
          <button onClick={() => setIsUpdate(false)} className="formCancel">
            Cancel
          </button>
        </div>
      ) : (
        <>
          <button onClick={() => deleteRecipe(id)} className="delete">
            {isLoading.delete.some((deleted) => deleted === id)
              ? "Loading"
              : "Delete"}
          </button>
          <button onClick={() => setIsUpdate(true)} className="update">
            Update
          </button>
          <img src={image} alt="yemekFotografı" />
          <div className="card-body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
