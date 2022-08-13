import "./App.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { word, encryptWord, searchLetter, revealLetter } from "./functions/wordFunctions";

const newWord = word;
const encryptedWord = encryptWord(newWord);

function App() {
  const [inputError, setInputError] = useState("");
  const [value, setValue] = useState(encryptedWord);
  const [inputValue, setInputValue] = useState("");
  const [helperText, setHelperTest] = useState("");

  console.log(value, newWord);

  function updateInputValue(e) {
    const result = e.target.value;
    if(result.length > 1) {
      setHelperTest("Only letter allowed!");
    }else {
      setInputValue(result);
      setHelperTest("");
    }
  }

  function handleClick() {
    const res = searchLetter(newWord, inputValue);
    console.log(res);
    if(res !== 0) {
      setValue(revealLetter(encryptedWord, res, inputValue));
      setInputValue("");
      setInputError("");
    } else {
      setInputError("error");
    }
  }

  useEffect(()=>{console.log("rendered")}, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={3} direction="row" sx={{p:2}}>
          {value.map((element) => (
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              sx={{
                color: "text.primary",
                fontSize: "10vw",
                fontWeight: "regular",
              }}
            >
              {element}
            </Typography>
          ))}
        </Stack>
        <Stack spacing={2} direction="column" sx={{p:2}}>
          <TextField
            value={inputValue}
            label="Guess a letter"
            variant="standard"
            helperText={helperText}
            color={inputError}
            focused
            onChange={(e) => updateInputValue(e)}
          />
          <Button
            variant="contained"
            onClick={() => {
              console.log("clicked");
              handleClick();
            }}
          >
            Submit
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
