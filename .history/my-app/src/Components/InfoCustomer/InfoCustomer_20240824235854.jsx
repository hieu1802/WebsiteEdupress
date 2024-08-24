import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./InfoCustomer.css";
import Modal from "../Modal/Modal";

function InfoCustomer() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
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
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="infoInput">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            required
          />
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
        <button style={{backgroundColor:'blue'}}>
          <Link to='/'>Quay Lại Trang Chủ</Link>
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
