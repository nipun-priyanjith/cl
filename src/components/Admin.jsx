




import React, { useState, useEffect } from 'react';
import { fetchWords, createWord } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Port from './Port';

const Admin = () => {
  // const [words, setWords] = useState([]);
  // const [newWord, setNewWord] = useState('');
  // const [error, setError] = useState('');
  const { user, handleSignOut } = useAuth();
  const navigate = useNavigate();

  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-white text-lg font-semibold">Admin Panel</h1>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/newproject')}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Project
            </button>
            <button
              onClick={() => navigate('/newexpi')}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New YouTube Video
            </button>
            <button
              onClick={() => navigate('/expi')}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              My YouTube Video List
            </button>
            {/* <button
              onClick={() => navigate('/newp')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Project Form
            </button> */}
            <button
              onClick={() => navigate('/p')}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              My Project List
            </button>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h2>


        <Port/>
      </div>
    </div>
  );
};

export default Admin;

