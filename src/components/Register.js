import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      'user',
      JSON.stringify({
        name: formData.fullName,
        email: formData.emailAddress,
      })
    );

    console.log('Form submitted:', formData);
    alert('Account created successfully!');
    navigate('/profile');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>
          Create your <br />
          PopX account
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form_input"
              placeholder=" "
              required
            />
            <label htmlFor="fullName" className="form_label">
              Full Name<span className="star">*</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form_input"
              placeholder=" "
              required
            />
            <label htmlFor="phoneNumber" className="form_label">
              Phone number<span className="star">*</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="form_input"
              placeholder=" "
              required
            />
            <label htmlFor="emailAddress" className="form_label">
              Email address<span className="star">*</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form_input"
              placeholder=" "
              required
            />
            <label htmlFor="password" className="form_label">
              Password<span className="star">*</span>
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form_input"
              placeholder=" "
            />
            <label htmlFor="companyName" className="form_label">
              Company name
            </label>
          </div>

          <div className="form-group radio-group-wrapper">
            <label>
              Are you an Agency?<span className="star">*</span>
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
