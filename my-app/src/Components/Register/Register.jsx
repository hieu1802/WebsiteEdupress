import React, { useState } from "react";
import "./Register.css";
import Modal from "../Modal/Modal.jsx";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Please enter a valid email address",
      });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Passwords do not match",
      });
      return;
    }

    // Get existing accounts from localStorage
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Check if the username or email is already taken
    const accountExists = existingAccounts.some(
      (account) => account.username === username || account.email === email
    );

    if (accountExists) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Username or email already taken",
      });
      return;
    }

    // Save the new account
    const newAccount = { email, username, password };
    localStorage.setItem(
      "accounts",
      JSON.stringify([...existingAccounts, newAccount])
    );

    setModal({
      isOpen: true,
      title: "Success",
      message: "Registration successful!",
    });

    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div class="input-group">
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
          <div class="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username*"
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
          <div class="input-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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
