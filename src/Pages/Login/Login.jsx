import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// Uncomment if using icons
// import { CiUser, CiLock } from 'react-icons/ci';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="wrapper">
      <div className="wrapper-main">
        {" "}
        {/* Fixed class name */}
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="inputbox">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {/* <CiUser className="icon" /> */}
            </div>

            <div className="inputbox">
              <input
                type="password"
                placeholder="Password" // Simplified placeholder
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <CiLock className="icon" /> */}
            </div>

            <div className="remember-forgot">
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#forgot">Forgot password?</a>
            </div>

            <button type="submit" className="login-button">
              <Link to="/User" className="log">
                Login
              </Link>
            </button>

            <div className="register-link">
              <p>
                Don't have an account?
                <Link to="/Register" className="log">
                  Register
                </Link>
              </p>

              <p>Log in as adminstrator
                <Link to="/AdminLogin" className="log">
                  Admin Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
