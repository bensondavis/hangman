import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import AlertDialog from "./component/SorryDialog";
import {
  encryptWord,
  searchLetter,
  revealLetter,
  getWord,
} from "./functions/wordFunctions";

const word = getWord();
const [encryptedWord, letter] = encryptWord(word);
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function App() {
  const [value, setValue] = useState(encryptedWord);
  const [gameStatus, setGameStatus] = useState(1);
  const [hearts, setHearts] = useState([1, 2, 3, 4, 5, 6]);
  const [openDialog, setOpenDialog] = useState(false);
  const [usedAplhabet, setUsedAplhabet] = useState([]);

  console.log(value, word);

  function getGameStatus() {
    if (value.indexOf("_") === -1) {
      setGameStatus(0);
    }
  }

  const handleClose = (val) => {
    setOpenDialog(val);
  };

  function handleEvaluate(index, letter) {
    const res = searchLetter(word, letter);
    if (res !== 0) {
      setValue(revealLetter(encryptedWord, res, letter));
      getGameStatus();
    } else {
      if (hearts.length > 0 && usedAplhabet[index] !== 1) {
        hearts.shift();
        setHearts(hearts);
      }
    }

    if (hearts.length === 0) {
      setGameStatus(0);
      setOpenDialog(true);
    }
  }

  function handleUsedAlphabet(key, index) {
    if (key === letter) return "text";
    else if (usedAplhabet[index] === 1) return "text";
    else return "contained";
  }

  function handleAlphabetClick(alphabetIndex, key) {
    const newUsedAplhabet = [...usedAplhabet];
    newUsedAplhabet[alphabetIndex] = 1;
    setUsedAplhabet(newUsedAplhabet);

    handleEvaluate(alphabetIndex, key);
  }

  return (
    <div className="App">
      <Stack direction="column">
        <Box elevation={8}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "text.primary", m: "auto", mt: 1, mb: 1 }}
          >
            Hangman
          </Typography>
        </Box>
        <Divider />
        <Stack spacing={1} direction="row" sx={{ m: 1 }}>
          {hearts.map((i) => (
            <Typography variant="h3">
              <FavoriteIcon key={i} sx={{ color: red.A400 }} />
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack
        spacing={3}
        sx={{ mt: "20vh" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 1 }}
        >
          {value.map((element) => (
            <Typography
              variant="h2"
              sx={{
                color: "text.primary",
                fontSize: "7.5vw",
                fontWeight: "light",
              }}
            >
              {element}
            </Typography>
          ))}
        </Stack>
        {gameStatus ? (
          <Grid
            container
            spacing={0.5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2, maxWidth: "750px" }}
            columns={{ md: 12, sm: 12 }}
          >
            {alphabet.map((key, index) => (
              <Grid item key={key}>
                <Button
                  variant={handleUsedAlphabet(key, index)}
                  key={key}
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
      </Stack>
      <AlertDialog open={openDialog} onClose={handleClose} />
    </div>
  );
}

export default App;
