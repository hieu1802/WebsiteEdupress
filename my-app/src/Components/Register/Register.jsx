import React from "react";
import "./Register.css";

function Register() {
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <form action="/register" method="post">
          <div class="input-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email*"
              required
            />
          </div>
          <div class="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username*"
              required
            />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password*"
              required
            />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password*"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
