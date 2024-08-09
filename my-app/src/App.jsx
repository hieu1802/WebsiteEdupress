import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LostPass from "./Components/LostPass/LostPass";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lostPass" element={<LostPass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
