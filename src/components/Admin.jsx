// // client/src/components/Admin.jsx
// import React, { useState, useEffect } from 'react';
// import { fetchWords, createWord } from '../services/api';
// import{useAuth} from '../context/AuthContext';

// const Admin = () => {
//   const [words, setWords] = useState([]);
//   const [newWord, setNewWord] = useState('');
//   const [error, setError] = useState('');
//   const { user, handleSignOut } = useAuth();

//   useEffect(() => {
//     const getWords = async () => {
//       try {
//         const wordsData = await fetchWords();
//         setWords(wordsData);
//       } catch (error) {
//         setError('Failed to fetch words.');
//       }
//     };

//     getWords();
//   }, []);

//   const handleAddWord = async () => {
//     try {
//       if (newWord.trim() === '') {
//         setError('Word cannot be empty.');
//         return;
//       }
//       await createWord({ text: newWord });
//       setNewWord('');
//       const wordsData = await fetchWords();
//       setWords(wordsData);
//       setError('');
//     } catch (error) {
//       setError('Failed to add word.');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>
//       <input
//         type="text"
//         value={newWord}
//         onChange={(e) => setNewWord(e.target.value)}
//         placeholder="Enter new word"
//       />
//       <button onClick={handleAddWord}>Add Word</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ul>
//         {words.length > 0 ? (
//           words.map((word) => (
//             <li key={word._id}>{word.text}</li>
//           ))
//         ) : (
//           <p>No words available.</p>
//         )}
//       </ul>
//       <br/><br/><br/><br/><br/><br/><br/><br/>
//       <h1>Welcome, {user?.email}</h1>
//       <button onClick={handleSignOut}>Sign Out</button>
//     </div>
//   );
// };

// export default Admin;






import React, { useState, useEffect } from 'react';
import { fetchWords, createWord } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Port from './Port';

const Admin = () => {
  // const [words, setWords] = useState([]);
  // const [newWord, setNewWord] = useState('');
  const [error, setError] = useState('');
  const { user, handleSignOut } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getWords = async () => {
  //     try {
  //       const wordsData = await fetchWords();
  //       setWords(wordsData);
  //     } catch (error) {
  //       setError('Failed to fetch words.');
  //     }
  //   };

  //   getWords();
  // }, []);

  // const handleAddWord = async () => {
  //   try {
  //     if (newWord.trim() === '') {
  //       setError('Word cannot be empty.');
  //       return;
  //     }
  //     await createWord({ text: newWord });
  //     setNewWord('');
  //     const wordsData = await fetchWords();
  //     setWords(wordsData);
  //     setError('');
  //   } catch (error) {
  //     setError('Failed to add word.');
  //   }
  // };

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
{/* 
        <div className="w-full max-w-xl">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            placeholder="Enter new word"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
          />
          <button
            onClick={handleAddWord}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add Word
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <ul className="bg-white shadow-md rounded-lg p-4">
            {words.length > 0 ? (
              words.map((word) => (
                <li key={word._id} className="border-b py-2">
                  {word.text}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No words available.</p>
            )}
          </ul>
        </div> */}

        <Port/>
      </div>
    </div>
  );
};

export default Admin;

