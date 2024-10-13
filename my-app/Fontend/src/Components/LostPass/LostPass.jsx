import React, { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import "./LostPass.css";
import { useNavigate } from "react-router-dom";

function LostPass() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });
  const navigate = useNavigate();

  const handleLostPass = (e) => {
    e.preventDefault();

    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const accountExists = existingAccounts.some(
      (account) =>
        account.username === usernameOrEmail ||
        account.email === usernameOrEmail
    );

    if (accountExists) {
      setIsVerified(true);
    } else {
      setModal({ isOpen: true, title: "Error", message: "Account not found" });
    }
  };

  const handleResetPassword = (newPassword, confirmPassword) => {
    if (newPassword !== confirmPassword) {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Passwords do not match",
      });
      return;
    }

    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const updatedAccounts = existingAccounts.map((account) => {
      if (
        account.username === usernameOrEmail ||
        account.email === usernameOrEmail
      ) {
        return { ...account, password: newPassword };
      }
      return account;
    });

    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setModal({
      isOpen: true,
      title: "Success",
      message: "Password reset successful!",
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);

    setUsernameOrEmail("");
    setIsVerified(false);
  };

  return (
    <div>
      {isVerified ? (
        <ResetPassword onReset={handleResetPassword} />
      ) : (
        <div className="lostPass">
          <h1>Lost Your Password?</h1>
          <form onSubmit={handleLostPass}>
            <div className="input-group">
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                placeholder="Enter your Email or Username*"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Get New Password</button>
          </form>
        </div>
      )}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, title: "", message: "" })}
        title={modal.title}
        message={modal.message}
      />
    </div>
  );
}

function ResetPassword({ onReset }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReset(newPassword, confirmPassword);
  };

  return (
    <div className="resetPassword">
      <h1>Reset Your Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            name="newPassword"
            placeholder="New Password*"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password-visibility"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? (
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
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default LostPass;
