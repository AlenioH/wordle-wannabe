import './App.css';
import { useState } from 'react';
import { GameField } from './components/GameField';
import { InputLine } from './components/InputLine';

function App() {

  const [solution, setSolution] = useState('');
  const [correct, setCorrect] = useState(false);
  const [guess, setGuesses] = useState(['', '', '', '', '']);
  const [result, setResult] = useState([[], [], [], [], [], []]);

  const fetchWord = () => {
    setSolution('');
    setGuesses(['', '', '', '', '']);
    setCorrect(false);
    fetch("https://random-word-api.herokuapp.com/word?length=5")
    .then((response) => response.json()).then((word) => setSolution(word[0]))
  }

  const onSubmit = (event, inputRef, attemptsLeft) => {
    event.preventDefault();
    if (correct) {
      if (window.confirm("Want to start a new game?")) fetchWord();
      return;
    }
    let value = inputRef.current.value;

    if (attemptsLeft < 0) alert('Try another time!');
    // check if the guess is an actual English word
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((response) => {
        if (response.ok)  return response.json()
        else {
          alert('This does not seem to be a real word...');
        }
      }
    ).then((word) => {
      if (word) {
        //check if the word is already on the guess list
        if (guess.includes(value)) {
          alert('You already tried this one!');
          inputRef.current.value = '';
          return;
        }
        guess[attemptsLeft] = value;
        setGuesses([...guess]);
        const solutionDeconstructed = solution.split('');
        const wordDeconstructed = value.split('');

        //need to replace existing ones with the new ones
        wordDeconstructed.forEach((item1, index1) => {
          solutionDeconstructed.forEach((item2, index2) => {
            if (item1 === item2 && index1 === index2) {
              result[attemptsLeft].push({ [item1]: 'full' });
            } else if (item1 === item2 && index1 !== index2) {
              result[attemptsLeft].push({ [item1]: 'part' });
            } else {
              result[attemptsLeft].push(0);
            }
          });
        });

        setResult([...result]);

        if (value === solution) {
          alert('CORRECT');
          setCorrect(true);
        }
      }

      inputRef.current.value = '';
    })
    .catch((err) => console.error(err))

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
