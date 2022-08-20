import './App.css';
import { useState } from 'react';
import { GameField } from './components/GameField';
import { InputLine } from './components/InputLine';

function App() {

  const [solution, setSolution] = useState('');
  const [guess, setGuesses] = useState(['', '', '', '', '']);


  const [result, setResult] = useState([[], [], [], [], [], []]);

  const fetchWord = () => {
    setSolution('');
    setGuesses(['', '', '', '', '']);
    fetch("https://random-word-api.herokuapp.com/word?length=5")
    .then((data) => data.json()).then((word) => setSolution(word[0]))
  }

  const onSubmit = (event, inputRef, guessNumber) => {
    event.preventDefault();
    if (guessNumber < 0) alert('Try another time!');
    guess[guessNumber] = inputRef.current.value;
    setGuesses([...guess]);
    const solutionDeconstructed = solution.split('');
    const wordDeconstructed = inputRef.current.value.split('');

    //need to replace existing ones with the new ones
    wordDeconstructed.forEach((item1, index1) => {
      solutionDeconstructed.forEach((item2, index2) => {
        if (item1 === item2 && index1 === index2) {
          result[guessNumber].push({ [item1]: 'full' });
        } else if (item1 === item2 && index1 !== index2) {
          result[guessNumber].push({ [item1]: 'part' });
        } else {
          result[guessNumber].push(0);
        }
      });
    });

    setResult([...result]);

    if (inputRef.current.value === solution) {
      alert('CORRECT');
    }
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <button onClick={fetchWord}>Start new game</button>
      {solution && (
        <>
          <InputLine onSubmit={onSubmit} guess={guess} />
          <GameField guess={guess} result={result} />
        </>
      )}
    </div>
  );
}

export default App;
