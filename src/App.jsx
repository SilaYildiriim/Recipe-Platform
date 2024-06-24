import "./App.css";
import Navi from "./components/Navi";
import Diger from "./components/Diger";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { DataContextProvider } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer autoClose={3000} />
        <Navi />
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<Diger />} />
            <Route path="login" element={<Login />} />
            <Route
              path="addRecipe"
              element={<PrivateRoute element={<Form />} />}
            />
            <Route
              path="home"
              element={<PrivateRoute element={<CardList />} />}
            />
            <Route path="about" element={<Diger />} />
            <Route
              path="profile"
              element={<PrivateRoute element={<Profile />} />}
            />
          </Routes>
        </DataContextProvider>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
