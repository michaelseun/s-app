import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };
  return (
    <div>
      <div className="wrapperr">
        <div className="wrapperr-main">
         
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h1>Admin Login</h1>

              <div className="inputbox">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                
              </div>

              <div className="inputbox">
                <input
                  type="password"
                  placeholder="Password" // Simplified placeholder
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
             
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
                <Link to="/AdminScreen" className="logg">
                  Login
                </Link>
              </button>
              
                <button type="submit" className="login-button">
                <Link to="/Login" className="logg">
                  Login as Student
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
