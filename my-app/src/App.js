import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LostPass from "./Components/LostPass/LostPass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Helloo</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lostPass" element={<LostPass />} />
      </Routes>
    </Router>
  );
}

export default App;
