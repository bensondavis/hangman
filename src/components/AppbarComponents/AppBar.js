import hangmanIcon from "../../images/hangman.png";
import "@fontsource/silkscreen";
import { Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuList from "./MenuList";

export default function AppBar({ setWins, setAttempts }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="appbar" style={{ marginBottom: 5 }}>
      <Typography
        fontSize={"2.5rem"}
        fontFamily={"Silkscreen"}
        sx={{ color: "text.primary" }}
      >
        <img src={hangmanIcon} width={"40"} alt="hangman-icon" /> Hangman
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0.5rem", right: "0.3rem" }}
        onClick={handleClick}
      >
        {!open ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
      </IconButton>

      <MenuList
        anchorEl={anchorEl}
        handleClose={handleClose}
        setWins={setWins}
        setAttempts={setAttempts}
      />
    </div>
  );
}
