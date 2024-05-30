import "./App.css";
import Navi from "./components/Navi";
import Diger from "./components/Diger";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { fakeRecipes } from "./assets/data/recipes";
import { useState } from "react";

function App() {
  const [recipes, setRecipe] = useState(fakeRecipes);

  return (
    <>
      <Navi />
      <Diger />
      <CardList recipes={recipes} />
      <Footer />
    </>
  );
}

export default App;
