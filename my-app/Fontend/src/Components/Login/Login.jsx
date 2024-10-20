import React, { useState, useEffect } from "react";
import "./Login.css";
import Modal from "../Modal/Modal.jsx";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername");

    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    localStorage.setItem("username", e);

    e.preventDefault();

    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const account = existingAccounts.find(
      (account) =>
        (account.username === username || account.email === username) &&
        account.password === password
    );

    if (account) {
      console.log("Login successful");
      setModal({
        isOpen: true,
        title: "Success",
        message: "Login successful!",
      });
      localStorage.setItem("loggedInUser", JSON.stringify(account));

      if (rememberMe) {
        localStorage.setItem("savedUsername", username);
      } else {
        localStorage.removeItem("savedUsername");
      }

      if (account.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
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
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password-visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1l22 22" />
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 21C6.48 21 2 16.5 2 12c0-1.39.28-2.73.78-3.94M3.51 3.51C4.72 2.28 6.27 1.51 8 1.51c2.9 0 5.67 1.68 7.93 4.5" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M22 12c0 4.418-4.477 8-10 8S2 16.418 2 12 6.477 4 12 4s10 3.582 10 8z" />
                </svg>
              )}
            </span>
          </div>
          <div className="input-group remember-me">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember Me</label>
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
