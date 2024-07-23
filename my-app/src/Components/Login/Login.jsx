import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <form action="/login" method="post">
          <div class="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email or username*"
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
          <div class="input-group remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label for="remember">Remember Me</label>
          </div>
          <button type="submit">Login</button>
          <a className="lost-pass" href="#">
            Lost your password?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
