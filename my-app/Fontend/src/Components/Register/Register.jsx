import React, { useState } from "react";
import "./Register.css";
import Modal from "../Modal/Modal.jsx";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      const dateOfBirth = "";
      const phoneNumber = "";
      const address = "";

      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            userName,
            password,
            dateOfBirth,
            phoneNumber,
            address,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setModal({
          isOpen: true,
          title: "Success",
          message: "Registration successful!",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setModal({
          isOpen: true,
          title: "Error",
          message: data.message || "Registration failed",
        });
      }
    } catch (error) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Registration failed",
      });
    }
  };

  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username*"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
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
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password-visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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
          <button type="submit">Register</button>
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

export default Register;
