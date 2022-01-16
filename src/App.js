import './App.css';
import { useState } from 'react';
import { GameField } from './components/GameField';
import { InputLine } from './components/InputLine';

function App() {
  const [word, setWord] = useState(['', '', '', '', '', '']);

  const [solution, setSolution] = useState('cover');

  const [result, setResult] = useState([[], [], [], [], [], []]);
  console.log({ result });

  const onSubmit = (event, inputRef, wordNumber) => {
    event.preventDefault();
    if (wordNumber < 0) alert('You are dumb!');
    word[wordNumber] = inputRef.current.value;
    setWord([...word]);
    const solutionDeconstructed = solution.split('');
    const wordDeconstructed = inputRef.current.value.split('');

    //need to replace existing ones with the new ones
    wordDeconstructed.forEach((item1, index1) => {
      solutionDeconstructed.forEach((item2, index2) => {
        if (item1 === item2 && index1 === index2) {
          result[wordNumber].push({ [item1]: 'full' });
        } else if (item1 === item2 && index1 !== index2) {
          result[wordNumber].push({ [item1]: 'part' });
        } else {
          result[wordNumber].push(0);
        }
      });
    });

    setResult([...result]);

    inputRef.current.value = '';

    if (inputRef.current.value === solution) {
      alert('CORRECT');
    }
  };

  return (
    <div className="App">
      <InputLine onSubmit={onSubmit} word={word} />
      <GameField word={word} result={result} />
    </div>
  );
}

export default App;
