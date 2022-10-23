import "./App.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AlertDialog from "./components/SorryDialog";
import Success from "./components/Confetti";
import HighScore from "./components/Score";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import AppBar from "./components/AppBar";
import Hangman from "./components/Hangman";
import {
  encryptWord,
  searchLetter,
  revealLetter,
  getWord,
  findInititalChar,
} from "./functions/wordFunctions";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

localStorage.setItem("attempts", localStorage.getItem("attempts") ?? "1");
localStorage.setItem("wins", localStorage.getItem("wins") ?? "0");

function App() {
  const [word, setWord] = useState(getWord());
  const [initChar, setInitChar] = useState(findInititalChar(word));
  const [encrypt, setEncrypt] = useState(encryptWord(word, initChar));
  const [value, setValue] = useState(encrypt);
  const [gameOver, setGameOver] = useState(0);
  const [lives, setLives] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [openDialog, setOpenDialog] = useState(false);
  const [usedAplhabet, setUsedAplhabet] = useState(
    getInitUsedAlphabet(initChar)
  );
  const [keyboard, setKeyboard] = useState(true);
  const [newGameButton, setNewGameButton] = useState(false);

  function getInitUsedAlphabet(char) {
    const res = [];
    res[alphabet.indexOf(char)] = 1;
    return res;
  }
  
  function getGameStatus() {
    if (value.indexOf("_") === -1) {
      setKeyboard(false);
      setGameOver(1);
      setNewGameButton(true);

      localStorage.setItem("wins", +localStorage.getItem("wins") + 1);
    }
  }

  function handleEvaluate(index, letter) {
    const res = searchLetter(word, letter);
    if (res !== 0) {
      setValue(revealLetter(value, res, letter));
      getGameStatus();
    } else {
      if (lives.length > 0 && usedAplhabet[index] !== 1) {
        lives.shift();
        setLives(lives);
      }
    }

    if (lives.length === 0) {
      setKeyboard(false);
      setOpenDialog(true);
    }
  }

  function handleUsedAlphabet(index) {
    if (usedAplhabet[index] === 1) return "text";
    else return "contained";
  }

  function handleAlphabetClick(alphabetIndex, key) {
    const newUsedAplhabet = [...usedAplhabet];
    newUsedAplhabet[alphabetIndex] = 1;
    setUsedAplhabet(newUsedAplhabet);

    handleEvaluate(alphabetIndex, key);
  }

  function newGame() {
    const w = getWord();
    const initWord = findInititalChar(w);
    setWord(w);
    setInitChar(initWord);
    setEncrypt(encryptWord(w, initWord));
    setUsedAplhabet(getInitUsedAlphabet(initWord));
    setGameOver(false);
    setLives([1, 2, 3, 4, 5, 6, 7]);
    setKeyboard(true);
    setOpenDialog(false);
    setNewGameButton(false);
    localStorage.setItem("attempts", +localStorage.getItem("attempts") + 1);
  }

  function reveal() {
    setOpenDialog(false);
    setValue(word.split(""));
    setNewGameButton(true);
  }

  useEffect(() => {
    setValue(encrypt);
  }, [encrypt]);

  return (
    <div className="App">
      {gameOver ? <Success /> : null}

      <AppBar />

      <Divider />

      <HighScore />

      <div className="container">
        <Stack
          direction={{xs: 'column', sm: 'column', md: 'row'}}
          alignItems="center"
          justifyContent="space-evenly"
          spacing={{xs: 0, sm: 1, md: 5}}
        >
          <Hangman lives={lives} />
          <div>
            <Word value={value} />

            {keyboard ? (
              <Keyboard
                alphabet={alphabet}
                handleUsedAlphabet={handleUsedAlphabet}
                handleAlphabetClick={handleAlphabetClick}
              />
            ) : null}

            {newGameButton ? (
              <>
                <Button variant="outlined" onClick={newGame}>
                  New Challenge
                </Button>
              </>
            ) : null}
          </div>
        </Stack>
      </div>

      <AlertDialog open={openDialog} newGame={newGame} reveal={reveal} />
    </div>
  );
}

export default App;
