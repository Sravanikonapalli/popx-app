import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (registeredUser && registeredUser.email === email) {
      localStorage.setItem('user', JSON.stringify({
        name: registeredUser.name || 'User',
        email,
      }));
      console.log('Login successful:', { email });
      navigate('/profile'); 
    } else {
      alert('Invalid login. Please register first.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Signin to your <br/> PopX account</h2>
        <p className="login-description">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={email}
              onChange={handleEmailChange}
              placeholder=" "
              required
            />
            <label htmlFor="email" className="floating-label">Email Address</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              placeholder=" "
              required
            />
            <label htmlFor="password" className="floating-label">Password</label>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
