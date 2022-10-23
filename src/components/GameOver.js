import { Button } from "@mui/material";

export default function GameOver({ word, newGame }) {
  return (
    <div style={{ maxWidth: "750px" }}>
      <p style={{ fontSize: "3rem" }}>Sorry you lost :(</p>
      <h2>The word was {word}.</h2>
      <Button variant="contained" onClick={newGame}>
        Try Another
      </Button>
    </div>
  );
}
