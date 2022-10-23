import { Button } from "@mui/material";

export default function GameWin({newGame}) {
  return (
    <>
      <p style={{ fontSize: "2rem" }}>Very Good!</p>
      <Button variant="contained" onClick={newGame}>
        New Challenge
      </Button>
    </>
  );
}
