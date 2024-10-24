import React, { useState, useEffect } from "react";
import "./Login.css";
import Modal from "../Modal/Modal.jsx";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUserName = localStorage.getItem("savedUserName");

    if (savedUserName) {
      setUserName(savedUserName);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: userName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        setModal({
          isOpen: true,
          title: "Success",
          message: "Login successful!",
        });

        localStorage.setItem("loggedInUser", JSON.stringify(data.user));

        if (rememberMe) {
          localStorage.setItem("savedUserName", userName);
        } else {
          localStorage.removeItem("savedUserName");
        }

        setTimeout(() => {
          if (data.user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }, 2000);
      } else {
        setModal({
          isOpen: true,
          title: "Error",
          message: data.message || "Invalid username or password",
        });
      }
    } catch (error) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Server error occurred. Please try again later.",
      });
      console.error("Login error:", error);
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
              id="userName"
              name="userName"
              placeholder="Email or username*"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
