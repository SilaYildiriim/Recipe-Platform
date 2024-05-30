import "./App.css";
import Navi from "./components/Navi";
import Diger from "./components/Diger";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { fakeRecipes } from "./assets/data/recipes";
import { useState } from "react";

function App() {
  const [recipes, setRecipe] = useState(fakeRecipes);

  const yemekEkle = (yeniYemek) => {
    setRecipe((prev) => [...prev, yeniYemek]);
  };

  const yemekSil = (id) => {
    setRecipe((prev) => prev.filter((deleted) => deleted.id !== id));
  };

  return (
    <>
      <Navi />
      <Diger yemekEkle={yemekEkle} recipes={recipes} />
      <CardList recipes={recipes} yemekSil={yemekSil} />
      <Footer />
    </>
  );
}

export default App;
