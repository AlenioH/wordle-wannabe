import './App.css';
import { useState } from 'react';
import { GameField } from './components/GameField';
import { InputLine } from './components/InputLine';

function App() {
  const [word, setWord] = useState(['', '', '', '', '', '']);

  const [solution, setSolution] = useState('salon');

  //compare the submitted word against the solution letter by letter
  //

  const onSubmit = (event, inputRef, wordNumber) => {
    event.preventDefault();
    if (wordNumber < 0) alert('You are dumb!');
    word[wordNumber] = inputRef.current.value;
    setWord([...word]);
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <InputLine onSubmit={onSubmit} word={word} />
      <GameField word={word} />
    </div>
  );
}

export default App;
