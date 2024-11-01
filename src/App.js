import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import { Routes, Route } from "react-router-dom";

function App() {
  const [maxError, setMaxError] = useState(0);
  const [answerLength, setanswerLength] = useState(0);
  const [secretWord, setSecretWord] = useState(() => {
    // 조건1 || 조건2 -> 둘 중 하나라도 참이면 참이다
    let word = window.localStorage.getItem('secretWord'); // 있으면 그대로 쓰고
    word && word.length > 0 ? setanswerLength(word.length) : setanswerLength(0);
    word && word.length > 0 ? setMaxError(word.length + 2) : setMaxError(1);
    return word || ''
  });

  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>
      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} answerLength={answerLength} maxError={maxError} />} />
        <Route path="/admin" element={< SetWord />} />
      </Routes>
    </div>
  );
}

export default App;
