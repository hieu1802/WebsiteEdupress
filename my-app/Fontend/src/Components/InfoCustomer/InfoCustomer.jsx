import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./InfoCustomer.css";
import Modal from "../Modal/Modal";

function InfoCustomer() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    userName: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUserInfo(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const buttonClicked = e.nativeEvent.submitter.name;

    if (buttonClicked === "updateInfo") {
      const updatedAccounts = JSON.parse(localStorage.getItem("accounts")).map(
        (account) =>
          account.email === userInfo.email
            ? { ...account, ...userInfo }
            : account
      );
      localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
      localStorage.setItem("loggedInUser", JSON.stringify(userInfo));

      setModal({
        isOpen: true,
        title: "Success",
        message: "Information updated successfully!",
      });
    } else if (buttonClicked === "deleteAccount") {
      navigate("/delete-account");
    }
  };

  return (
    <div className="info-customer">
      <h1>Your Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="infoInput">
          <label>Email: </label>
          <input type="email" name="email" value={userInfo.email} disabled />
        </div>
        <div className="infoInput">
          <label>Username: </label>
          <input
            type="text"
            name="userName"
            value={userInfo.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="infoInput">
          <label>Password: </label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userInfo.password}
              onChange={handleChange}
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
        </div>
        <div className="infoInput">
          <label>Date of Birth: </label>
          <input
            type="date"
            name="dateOfBirth"
            value={userInfo.dateOfBirth}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="infoInput">
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="infoInput">
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            // required
          />
        </div>
        <button type="submit" name="updateInfo">
          Update Information
        </button>
        <button className="deleteAcc" type="submit" name="deleteAccount">
          Delete Account
        </button>
        <button style={{ backgroundColor: "blue" }}>
          <Link to="/" style={{ color: "#fff" }}>
            Back To HomePage
          </Link>
        </button>
      </form>
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
      />
    </div>
  );
}

export default InfoCustomer;
