import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log({ fullName, studentId, email, password });
  };

  return (
    <div className="register-wrapper">
      <div className="form-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h1>Student Registration</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          {/* <div className="input-box">
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div> */}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
          <div className="login-link">
            <p>
              Already have an account?
              <Link to="/Login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
