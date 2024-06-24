import { createContext, useState, useEffect } from "react";
import {
  addRecipeRequest,
  deleteRecipeRequest,
  updateRecipeRequest,
  getRecipesRequest,
} from "./ApiContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState("");

  const [isLoading, setIsLoading] = useState({
    allRecipe: false,
    add: false,
    delete: [],
    update: false,
  });

  useEffect(() => {
    const getRecipes = async () => {
      setIsLoading((prev) => ({ ...prev, read: true }));
      try {
        const data = await getRecipesRequest();
        setRecipes(data);
      } catch (error) {
        toast.error("Failed to load recipes: " + error.message);
      } finally {
        setIsLoading((prev) => ({ ...prev, read: false }));
      }
    };
    getRecipes();
  }, []);

  const addRecipe = async (newRecipe) => {
    setIsLoading((prev) => ({ ...prev, add: true }));
    try {
      const addedRecipe = await addRecipeRequest(newRecipe);
      setRecipes((prev) => [...prev, addedRecipe]);
      toast.success("Recipe added successfully!");
    } catch (error) {
      toast.error("Failed to add recipe: " + error.message);
    } finally {
      setIsLoading((prev) => ({ ...prev, add: false }));
    }
  };

  const deleteRecipe = async (id) => {
    setIsLoading((prev) => ({ ...prev, delete: [...prev.delete, id] }));
    try {
      await deleteRecipeRequest(id);
      setRecipes((prev) => prev.filter((deleted) => deleted.id !== id));
      toast.success("Recipe deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete recipe: " + error.message);
    } finally {
      setIsLoading((prev) => ({
        ...prev,
        delete: prev.delete.filter((deleted) => deleted !== id),
      }));
    }
  };

  const updateRecipe = async (id, updateData) => {
    setIsLoading((prev) => ({ ...prev, update: true }));
    try {
      const updatedRecipe = await updateRecipeRequest(id, updateData);
      setRecipes((prev) =>
        prev.map((recipe) => (recipe.id === id ? updatedRecipe : recipe))
      );
      toast.success("Recipe updated successfully!");
    } catch (error) {
      toast.error("Failed to update recipe: " + error.message);
    } finally {
      setIsLoading((prev) => ({ ...prev, update: false }));
      setEditRecipe("");
    }
  };

  return (
    <DataContext.Provider
      value={{
        recipes,
        isLoading,
        addRecipe,
        deleteRecipe,
        updateRecipe,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
