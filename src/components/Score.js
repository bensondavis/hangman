import "../App.css";
import { Typography } from "@mui/material";
import "@fontsource/concert-one";

export default function HighScore({wins, attempts}) {
  return (
    <div className="highscore" >
      <Typography className="highscore" variant="h6" fontFamily={"Concert One"}>
        HIGH SCORE: {wins}/{attempts}
      </Typography>
    </div>
  );
}
