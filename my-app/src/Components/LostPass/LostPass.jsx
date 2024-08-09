import React, { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import "./LostPass.css";

function LostPass() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

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
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password*"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
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
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default LostPass;
