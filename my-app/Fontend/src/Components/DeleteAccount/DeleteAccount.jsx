import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal.jsx";
import "./DeleteAccount.css";
import Header from "../HomePage/Header.jsx";

const DeleteAccount = () => {
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        setModal({
          isOpen: true,
          title: "Error",
          message: "No user is currently logged in.",
        });
        return;
      }

      const allAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
      const updatedAccounts = allAccounts.filter(
        (account) => account.username !== loggedInUser.username
      );

      localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
      localStorage.removeItem("loggedInUser");

      setModal({
        isOpen: true,
        title: "Success",
        message: "Your account have been deleted.",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setModal({
        isOpen: true,
        title: "Error",
        message: "Please confirm account deletion.",
      });
    }
  };

  return (
    <>
    <Header/>
    <div className="delete-account-page">
      <h2>Delete Your Account</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleDelete();
        }}
      >
        <div className="form-group">
          <label htmlFor="reason">Reason for Deleting Account:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <div className="form-group-checkbox">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={confirm}
              onChange={(e) => setConfirm(e.target.checked)}
            />
            I confirm that I want to delete my account.
          </label>
        </div>
        <button type="submit" className="delete-button">
          Delete Account
        </button>
      </form>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, title: "", message: "" })}
        title={modal.title}
        message={modal.message}
      />
    </div>
    </>
  );
};

export default DeleteAccount;