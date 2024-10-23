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

  const handleDelete = async () => {
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

      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/user/delete-user/${loggedInUser._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loggedInUser.token}`,
            },
          }
        );

        if (!response.ok) {
          const result = await response.json();
          setModal({
            isOpen: true,
            title: "Error",
            message: result.message || "Failed to delete account",
          });
          return;
        }

        localStorage.removeItem("loggedInUser");

        setModal({
          isOpen: true,
          title: "Success",
          message: "Your account has been deleted.",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Error deleting account:", error);
        setModal({
          isOpen: true,
          title: "Error",
          message: "An error occurred while deleting the account.",
        });
      }
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
      <Header />
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
