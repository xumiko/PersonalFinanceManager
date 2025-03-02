import React, { useState } from 'react';
import "./register.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  // States to store the form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const navigate =useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (password !== confirmPassword) {
        setPasswordError(true); // If passwords don't match, show error
      } else {
        setPasswordError(false);
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("ConfirmPassword:", confirmPassword);
        const newUser = {
          name: username,
          email,
          password,
        };
        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
          });
    
          if (response.ok) {
            const data = await response.json();
            // Store the JWT token in localStorage
            localStorage.setItem('authToken', data.token);
            navigate('/dashboard');
          } else {
            console.log('Error registering user');
          }
        } catch (error) {
          console.error('Error registering:', error);
        }
      }  
      navigate('/dashboard');
  };


  return (
    <div className='registration'>
      <h1 >Registration Page</h1>
      <p>Join our community now!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Handle input change
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
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

        <div className="mb-3">
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

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
          {passwordError && (
            <div className="alert">Passwords do not match!</div>
          )}
        </div>

        <button type="submit" >Sign up</button>
        <hr className="my-4"/>
        <p>already have an account? <Link className="signin" to="/login">Sign in</Link></p>
      </form>
    </div>
  );
};


// import React from 'react';

// export const Register = () => {
//   return (
//     <div>
//       <h1>Registration Page</h1>
//       <form>
//         {/* Your form content here */}
//       </form>
//     </div>
//   );
// };


