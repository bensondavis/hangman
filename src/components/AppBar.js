import hangmanIcon from "../images/hangman.png";
import "@fontsource/silkscreen";
import { Typography, IconButton, MenuItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import Menu from "@mui/material/Menu";
import Share from "./Share";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function AppBar({setWins, setAttempts}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openShare, setOpenShare] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clearData = () => {
    localStorage.setItem("wins", "0");
    localStorage.setItem("attempts", "1");
    setWins(localStorage.getItem("wins"));
    setAttempts(localStorage.getItem("attempts"));
  };

  const handleShareClickOpen = () => {
    setOpenShare(1);
  }

  const handleShareOnClose = (val) => {
    setOpenShare(val);
  }

  return (
    <div className="appbar" style={{marginBottom:5}}>
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
        <SettingsIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            clearData();
            handleClose();
          }}
          disableRipple
        >
          <RestartAltRoundedIcon />
          Reset
        </MenuItem>
        <MenuItem onClick={handleShareClickOpen}>
          <ShareRoundedIcon/>
          Social sharing
        </MenuItem>
      </StyledMenu>
      <Share open={openShare} onClose={handleShareOnClose} />
    </div>
  );
}
