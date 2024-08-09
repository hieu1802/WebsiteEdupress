import React, { useState } from "react";
import "./Login.css";
import Modal from "../Modal/Modal.jsx";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get existing accounts from localStorage
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Check if the username and password match an account
    const account = existingAccounts.find(
      (account) =>
        (account.username === username || account.email === username) &&
        account.password === password
    );

    if (account) {
      // Login successful
      console.log("Login successful");
      setModal({
        isOpen: true,
        title: "Success",
        message: "Login successful!",
      });
      // You can set the logged-in user's data in local storage or redirect to another page
      localStorage.setItem("loggedInUser", JSON.stringify(account));
      navigate("/"); // Redirect to the home page
    } else {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Invalid username or email and password",
      });
    }
  };

  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div class="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email or username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="input-group remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label for="remember">Remember Me</label>
          </div>
          <button type="submit">Login</button>
          <Link className="lost-pass" to="/lostPass">
            Lost your password?
          </Link>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>.
          </p>
        </form>
      </div>
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, title: "", message: "" })}
        title={modal.title}
        message={modal.message}
      />
    </div>
  );
}

export default Login;
