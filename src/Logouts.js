import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logouts = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    // Remove the token from localStorage or any other session data
    localStorage.removeItem("userToken");

    // Redirect the user to the login page
    navigate('/login'); // Use navigate instead of history.push
  };

  return (
    <div className="container mt-5">
      <h3>Are you sure you want to log out?</h3>
      <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logouts;
