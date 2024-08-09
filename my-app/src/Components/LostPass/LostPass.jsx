import React, { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import "./LostPass.css";

function LostPass() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false); // To track if the user is verified
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

  const handleLostPass = (e) => {
    e.preventDefault();

    // Get existing accounts from localStorage
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Check if the username or email exists
    const accountExists = existingAccounts.some(
      (account) =>
        account.username === usernameOrEmail ||
        account.email === usernameOrEmail
    );

    if (accountExists) {
      // User is verified, allow them to reset their password
      setIsVerified(true);
    } else {
      // Show error if username or email does not exist
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

    // Get existing accounts from localStorage
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

    // Save updated accounts to localStorage
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setModal({
      isOpen: true,
      title: "Success",
      message: "Password reset successful!",
    });

    // Reset the form and state
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
