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
    if (editingAccount.username === "admin") {
      alert("Cannot modify the admin account");
      return;
    }
    const updatedAccounts = accounts.map((account) =>
      account.username === editingAccount.username ? editingAccount : account
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
                  onClick={() => setEditingAccount(account)}
                  disabled={account.username === "admin"}
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
        <input
          type="password"
          placeholder="Password"
          value={editingAccount ? editingAccount.password : newAccount.password}
          onChange={(e) =>
            editingAccount
              ? setEditingAccount({
                  ...editingAccount,
                  password: e.target.value,
                })
              : setNewAccount({ ...newAccount, password: e.target.value })
          }
          required
          disabled={editingAccount && editingAccount.username === "admin"}
        />
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
