import React, { useState } from 'react';
import './login.css'; 
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

export const Login = ({onLogin}) => {
  // States to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    onLogin();

    navigate('/dashboard');
  };


  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Login to access your account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3 d-flex align-items-center">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Remember me?`}
          />
        </div>
      ))}
        
        <button type="submit" className="">Login</button>
        <p className='fp'><a>Forget Password?</a></p>
        <hr className="my-4"/>
        <p>Need an account? <Link className="signin" to="/register">Sign up</Link></p>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // onLogin function prop validation
};


// import React from 'react';

// export const Login = () => {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form>
//         {/* Your form content here */}
//       </form>
//     </div>
//   );
// };
