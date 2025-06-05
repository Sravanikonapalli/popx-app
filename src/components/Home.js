import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  
  return (
    <div className="home-page-container">
      <div className="home-content">
        <div className="top-empty-space"></div>

        <div className="welcome-section">
          <h1 className="welcome-heading">Welcome to PopX</h1>
          <p className="welcome-description">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>
        </div>

        <div className="home-buttons">
          <button
            className="create-account-btn"
            onClick={() => {
              // Navigate to the registration page
              window.location.href = '/register';
            }}>
            Create Account
          </button>
          <button
            className="login-btn"
            onClick={() => {
              // Navigate to the login page
              window.location.href = '/login';
            }}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home ;