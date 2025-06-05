import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';
import { FaCameraRetro } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div className="profile-container">
      <h3>Account Settings</h3>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image-wrapper">
            <img
              src="https://i.postimg.cc/W1nBf5KT/silver-gradient-social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standin.jpg"
              alt="Profile"
              className="profile-image"
            />
            <button className="camera-button" title="Change profile picture">
              <FaCameraRetro size={16} />
            </button>
          </div>
          <div className="user-info">
            <h4>{user.name || 'Your Name'}</h4>
            <p>{user.email || 'your.email@example.com'}</p>
          </div>
        </div>
        <p className="user-description">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipiscing Elitr. 
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore 
          Magna Aliquyam Erat,Sed Diam
        </p>
        <hr className='hr-line'/>
      </div>
    </div>
  );
};

export default Profile;
