// client/src/components/Frontend.jsx
import React, { useState, useEffect } from 'react';
import { fetchWords } from '../services/api';

const Frontend = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const getWords = async () => {
      const wordsData = await fetchWords();
      setWords(wordsData);
    };

    getWords();
  }, []);

  return (
    <div>
      <h1>Words List</h1>
      <ul>
        {words.map((word) => (
          <li key={word._id}>{word.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Frontend;
