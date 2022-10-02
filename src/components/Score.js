import "../App.css";
import { Typography } from "@mui/material";

export default function HighScore() {
    
  return (
    <div className="highscore">
      <Typography className="highscore" variant="h6" fontFamily={"Concert One"}>
        HIGH SCORE: {localStorage.getItem("wins")}/
        {localStorage.getItem("attempts")}
      </Typography>
    </div>
  );
}
