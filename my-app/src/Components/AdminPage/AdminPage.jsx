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
    setAccounts(storedAccounts);
  }, []);

  const handleAddAccount = () => {
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setNewAccount({ email: "", username: "", password: "", role: "user" });
  };

  const handleDeleteAccount = (username) => {
    const updatedAccounts = accounts.filter(
      (account) => account.username !== username
    );
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  };

  const handleUpdateAccount = () => {
    const updatedAccounts = accounts.map((account) =>
      account.username === editingAccount.username ? editingAccount : account
    );
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setEditingAccount(null);
  };

  const handleRoleChange = (username, role) => {
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
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                <button onClick={() => setEditingAccount(account)}>Edit</button>
                <button onClick={() => handleDeleteAccount(account.username)}>
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
        />
        <select
          value={editingAccount ? editingAccount.role : newAccount.role}
          onChange={(e) =>
            editingAccount
              ? setEditingAccount({ ...editingAccount, role: e.target.value })
              : setNewAccount({ ...newAccount, role: e.target.value })
          }
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">
          {editingAccount ? "Update Account" : "Add Account"}
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
