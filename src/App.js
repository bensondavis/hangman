import "./App.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import AlertDialog from "./component/SorryDialog";
import Success from "./component/Confetti";
import "@fontsource/silkscreen"
import "@fontsource/signika-negative"
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

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [word, setWord] = useState(getWord());
  const [initChar,setInitChar] = useState(findInititalChar(word))
  const [encrypt, setEncrypt] = useState(encryptWord(word,initChar));
  const [value, setValue] = useState(encrypt);
  const [gameOver, setGameOver] = useState(0);
  const [hearts, setHearts] = useState([1, 2, 3, 4, 5, 6]);
  const [openDialog, setOpenDialog] = useState(false);
  const [usedAplhabet, setUsedAplhabet] = useState(getInitUsedAlphabet(initChar));
  const [keyboard, setKeyboard] = useState(true);
  const [newGameButton, setNewGameButton] = useState(false);


  function getInitUsedAlphabet(char){
    const res = [];
    res[alphabet.indexOf(char)]=1;
    return res;
  }

  // console.log(word);

  function getGameStatus() {
    if (value.indexOf("_") === -1) {
      setKeyboard(false);
      setGameOver(1);
      setNewGameButton(true);
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
    const initWord= findInititalChar(w)
    setWord(w);
    setInitChar(initWord);
    setEncrypt(encryptWord(w,initWord));
    setUsedAplhabet(getInitUsedAlphabet(initWord));
    setGameOver(false);
    setHearts([1, 2, 3, 4, 5, 6]);
    setKeyboard(true);
    setOpenDialog(false);
    setNewGameButton(false);
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
      {/* <Box> */}
      {gameOver ? <Success /> : null}
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          fontFamily={"Silkscreen"}
          sx={{ color: "text.primary", m: "auto", mt: 1, mb: 1 }}
        >
          Hangman.
        </Typography>
      </ThemeProvider>

      <Divider />

      <Stack spacing={1} direction="row" justifyContent={"center"} alignItems={"center"} sx={{ m: 1 , height: "56px"}}>
        {hearts.map((i) => (
          <Typography key= {i} variant="h3">
            <FavoriteIcon  sx={{ color: red.A400 }} />
          </Typography>
        ))}
      </Stack>
      <div className="container">
      <Stack
        spacing={3}
        // sx={{ my: 10 , height: "50vh"}}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {value.map((key, index) => (
            <ThemeProvider key={index} theme={theme}>
              <Typography
                variant="h2"
                fontFamily={"Signika Negative"}
                sx={{
                  color: "text.primary",
                  fontWeight: "light",
                  textTransform: "uppercase"
                }}
              >
                {key}
              </Typography>
            </ThemeProvider>
          ))}
        </Stack>
        {keyboard ? (
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{  maxWidth: "750px" , mx: "auto", }}
            
          >
            {alphabet.map((key, index) => (
              <Grid item key={key}>
                <Button
                  variant={handleUsedAlphabet(index)}
                  onClick={() => {
                    handleAlphabetClick(index, key);
                  }}
                >
                  {key}
                </Button>
              </Grid>
            ))}
          </Grid>
        ) : null}
        {newGameButton ? (
          <>
            <Button variant="outlined" onClick={newGame}>New Challenge</Button>
          </>
        ) : null}
      </Stack>
      </div>
      
      <AlertDialog open={openDialog} newGame={newGame} reveal={reveal} />
    </div>
  );
}

export default App;
