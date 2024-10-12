import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  // using useState for updating 
  const [userData, setUserData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = () => {
    if (userData.username && userData.password) {
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Signup successful! You can now log in.');
      navigate('/login');
    } else {
      alert('Please enter both username and password.');

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Signup</h2>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
