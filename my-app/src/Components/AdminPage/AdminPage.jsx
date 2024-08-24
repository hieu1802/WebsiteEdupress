import React, { useState, useEffect } from "react";
import "./AdminPage.css";

function AdminPage() {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    email: "",
    username: "",
    password: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const adminAccountExists = storedAccounts.some(
      (account) => account.username === "admin"
    );

    if (!adminAccountExists) {
      const adminAccount = {
        email: "admin@example.com",
        username: "admin",
        password: "admin",
        role: "admin",
      };
      storedAccounts.push(adminAccount);
      localStorage.setItem("accounts", JSON.stringify(storedAccounts));
    }

    setAccounts(storedAccounts);
  }, []);

  const handleAddAccount = () => {
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setNewAccount({ email: "", username: "", password: "", role: "user" });
  };

  const handleDeleteAccount = (username) => {
    if (username === "admin") {
      alert("Cannot delete the admin account");
      return;
    }
    const updatedAccounts = accounts.filter(
      (account) => account.username !== username
    );
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  };

  const handleUpdateAccount = () => {
    const isDuplicateUsername = accounts.some(
      (account) =>
        account.username === editingAccount.username &&
        account.username !== editingAccount.originalUsername
    );

    if (isDuplicateUsername) {
      alert("This username is already taken");
      return;
    }

    const updatedAccounts = accounts.map((account) =>
      account.username === editingAccount.originalUsername
        ? editingAccount
        : account
    );

    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setEditingAccount(null);
  };

  const handleRoleChange = (username, role) => {
    if (username === "admin") {
      alert("Cannot change the role of the admin account");
      return;
    }
    const updatedAccounts = accounts.map((account) =>
      account.username === username ? { ...account, role } : account
    );
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  };

  return (
    <div className="admin">
      <h1>Admin Page</h1>

      <h2>All Registered Accounts</h2>
      <table className="listAcc">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.username}>
              <td>{account.email}</td>
              <td>{account.username}</td>
              <td>
                <select
                  value={account.role}
                  onChange={(e) =>
                    handleRoleChange(account.username, e.target.value)
                  }
                  disabled={account.username === "admin"}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() =>
                    setEditingAccount({
                      ...account,
                      originalUsername: account.username,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAccount(account.username)}
                  disabled={account.username === "admin"}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{editingAccount ? "Edit Account" : "Add New Account"}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editingAccount ? handleUpdateAccount() : handleAddAccount();
        }}
      >
        <input
          type="text"
          placeholder="Email"
          value={editingAccount ? editingAccount.email : newAccount.email}
          onChange={(e) =>
            editingAccount
              ? setEditingAccount({ ...editingAccount, email: e.target.value })
              : setNewAccount({ ...newAccount, email: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={editingAccount ? editingAccount.username : newAccount.username}
          onChange={(e) =>
            editingAccount
              ? setEditingAccount({
                  ...editingAccount,
                  username: e.target.value,
                })
              : setNewAccount({ ...newAccount, username: e.target.value })
          }
          required
          disabled={editingAccount && editingAccount.username === "admin"}
        />
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={
              editingAccount ? editingAccount.password : newAccount.password
            }
            onChange={(e) =>
              editingAccount
                ? setEditingAccount({
                    ...editingAccount,
                    password: e.target.value,
                  })
                : setNewAccount({ ...newAccount, password: e.target.value })
            }
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
        <button type="submit">
          {editingAccount ? "Update Account" : "Add Account"}
        </button>
        {editingAccount && (
          <button type="button" onClick={() => setEditingAccount(null)}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default AdminPage;
