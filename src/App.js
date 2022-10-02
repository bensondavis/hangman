import "./App.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AlertDialog from "./components/SorryDialog";
import Success from "./components/Confetti";
import "@fontsource/silkscreen";
import "@fontsource/concert-one";
import hangmanIcon from "./images/hangman.png";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import {
  encryptWord,
  searchLetter,
  revealLetter,
  getWord,
  findInititalChar,
} from "./functions/wordFunctions";
import ShareComponent from "./components/Share";
import HighScore from "./components/Score";
import Hearts from "./components/Hearts";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let theme = createTheme();
theme = responsiveFontSizes(theme);

localStorage.setItem("attempts", localStorage.getItem("attempts") ?? "1");
localStorage.setItem("wins", localStorage.getItem("wins") ?? "0");

function App() {
  const [word, setWord] = useState(getWord());
  const [initChar, setInitChar] = useState(findInititalChar(word));
  const [encrypt, setEncrypt] = useState(encryptWord(word, initChar));
  const [value, setValue] = useState(encrypt);
  const [gameOver, setGameOver] = useState(0);
  const [hearts, setHearts] = useState([1, 2, 3, 4, 5, 6]);
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
  // console.log(word);
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
      if (hearts.length > 0 && usedAplhabet[index] !== 1) {
        hearts.shift();
        setHearts(hearts);
      }
    }

    if (hearts.length === 0) {
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
    setHearts([1, 2, 3, 4, 5, 6]);
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
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          fontFamily={"Silkscreen"}
          sx={{ color: "text.primary", m: "auto", mt: 1, mb: 1 }}
        >
          <img src={hangmanIcon} width={"40"} alt="hangman icon" /> Hangman
        </Typography>
      </ThemeProvider>

      <Divider />

      <HighScore />

      <Hearts hearts={hearts} />

      <div className="shareButtons">
        <ShareComponent />
      </div>

      <div className="container">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
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
        </Stack>
      </div>

      <AlertDialog open={openDialog} newGame={newGame} reveal={reveal} />
    </div>
  );
}

export default App;
