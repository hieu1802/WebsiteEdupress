import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import { Link } from "react-router-dom";

function AdminPage() {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    email: "",
    userName: "",
    password: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/user/");
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, [accounts]);

  const handleAddAccount = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAccount),
        }
      );

      if (response.ok) {
        const createdAccount = await response.json();
        setAccounts([...accounts, createdAccount]);
        setNewAccount({ email: "", userName: "", password: "", role: "user" });
      } else {
        console.error("Failed to add account:", await response.text());
      }
    } catch (error) {
      console.error("Error adding account:", error);
    }
  };

  const handleDeleteAccount = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/delete-user/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setAccounts(accounts.filter((account) => account._id !== userId));
      } else {
        console.error("Failed to delete account:", await response.text());
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  const handleUpdateAccount = async () => {
    const isDuplicateUserName = accounts.some(
      (account) =>
        account.userName === editingAccount.userName &&
        account.userName !== editingAccount.originalUserName
    );

    if (isDuplicateUserName) {
      alert("This username is already taken");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/update-user/${editingAccount._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingAccount),
        }
      );

      if (response.ok) {
        setAccounts(
          accounts.map((account) =>
            account._id === editingAccount._id ? editingAccount : account
          )
        );
        setEditingAccount(null);
      } else {
        console.error("Failed to update account:", await response.text());
      }
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  const handleRoleChange = async (userId, role) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/user/update-user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role }),
        }
      );

      if (response.ok) {
        const updatedAccount = await response.json();

        setAccounts(
          accounts.map((account) =>
            account._id === userId ? updatedAccount : account
          )
        );
      } else {
        console.error("Failed to update role:", await response.text());
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <Link className="adminManagement" to={"/AdminManagement"}>
        Admin Management Page{" "}
      </Link>
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
            <tr key={account.userName}>
              <td>{account.email}</td>
              <td>{account.userName}</td>
              <td>
                <select
                  value={account.role}
                  onChange={(e) =>
                    handleRoleChange(account._id, e.target.value)
                  }
                  disabled={account.userName === "admin"}
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
                      originalUserName: account.userName,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAccount(account._id)}
                  disabled={account.userName === "admin"}
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
          value={editingAccount ? editingAccount.userName : newAccount.userName}
          onChange={(e) =>
            editingAccount
              ? setEditingAccount({
                  ...editingAccount,
                  userName: e.target.value,
                })
              : setNewAccount({ ...newAccount, userName: e.target.value })
          }
          required
          disabled={editingAccount && editingAccount.userName === "admin"}
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
