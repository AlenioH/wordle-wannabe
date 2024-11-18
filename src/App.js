import './App.css';
import { useState } from 'react';
import { GameField } from './components/GameField';
import { InputLine } from './components/InputLine';

function App() {

  const [solution, setSolution] = useState('');
  const [correct, setCorrect] = useState(false);
  const [guess, setGuesses] = useState([]);
  const [result, setResult] = useState([]);

  const fetchWord = async () => {
    setSolution('');
    setGuesses(Array(5).fill(''));
    setCorrect(false);
    const word = await fetch("https://random-word-api.herokuapp.com/word?length=5")
    const word_json = await word.json()
    // because these are different APIs and different dictionaries, unfortunately it can happen that the random word suggested by the one doesn't exist in the other, hence the check
    const isRealWord = await checkWord(word_json[0]);
    if (isRealWord) setSolution(word_json[0]);
    else fetchWord();
  }


  const checkWord = (word) => {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
        if (response.ok) return true;
        else {
          return false;
        }
      }
    )
    .catch((err) => console.error(err));
  }

  const onSubmit = async (event, inputRef, attempt) => {
    event.preventDefault();
    if (correct || attempt < 0) {
      if (window.confirm("Want to start a new game?")) fetchWord();
      return;
    }
    let value = inputRef.current.value.toLowerCase();

    // check if the guess is an actual English word
    const word = await checkWord(value);

    if (word) {
      // check if the word is already on the guess list
      if (guess.includes(value)) {
        alert('You already tried this one!');
        inputRef.current.value = '';
        return;
      }


      guess[attempt] = value;
      setGuesses([...guess]);
      const solutionDeconstructed = solution.split('');
      const guessDeconstructed = value.split('');

      guessDeconstructed.forEach((i, index) => {
        if (solutionDeconstructed.includes(i) ) {
          result[attempt] = result[attempt] || [];
          if (solutionDeconstructed[index] === i) {
            result[attempt].push({ [index]: 'full' });
            return;
          };
          result[attempt].push({ [index]: 'part' });
        }
      });

      setResult([...result]);
      if (value !== solution && attempt === 4) {
        setTimeout(() => alert(`Game over! The solution is: ${solution}. Next time you will get it!`), 500);
      }

      if (value === solution) {
        setTimeout(() => alert('CORRECT'), 500);
        setCorrect(true);
      }

    } else {
      alert('This does not seem to be a real word...');
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
