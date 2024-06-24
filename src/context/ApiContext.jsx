import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/recipes",
});

export const getRecipesRequest = async () => {
  const response = await api.get("/");
  return response.data;
};

export const addRecipeRequest = async (newRecipe) => {
  const response = await api.post("/", newRecipe);
  return response.data;
};

export const deleteRecipeRequest = async (id) => {
  await api.delete(`/${id}`);
};

export const updateRecipeRequest = async (id, updateData) => {
  const response = await api.put(`/${id}`, updateData);
  return response.data;
};
