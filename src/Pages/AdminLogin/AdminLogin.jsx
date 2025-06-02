import  {useState} from 'react'
import { Link } from 'react-router-dom';
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
                <a href="#register">Register Now</a>
              </p>

          
            </div>
          </form>
        </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default AdminLogin
