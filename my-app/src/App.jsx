import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AdminPage from "./Components/AdminPage/AdminPage";
import LostPass from "./Components/LostPass/LostPass";
import CouresPage from "./Components/CouresPage/CouresPage.jsx";
import BlogPage from "./Components/BlogPage/BlogPage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import InfoCustomer from "./Components/InfoCustomer/InfoCustomer.jsx";
import CourseDetail from "./Course-detail/Coursedetail.js";
import DeleteAccount from "./Components/DeleteAccount/DeleteAccount.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={<ProtectedRoute component={AdminPage} />}
          />
          <Route path="/lostPass" element={<LostPass />} />
          <Route path="/CouresPage" element={<CouresPage />} />
          <Route path="/info-customer" element={<InfoCustomer />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/Coursedetail" element={<CourseDetail />} />
          <Route path="/Coursedetail/:id" element={<CourseDetail />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
