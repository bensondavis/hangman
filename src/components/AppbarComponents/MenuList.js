import { styled, alpha } from "@mui/material/styles";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import Share from "./Share";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { MenuItem } from "@mui/material";
import Reset from "./Reset";

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

export default function MenuList({
  anchorEl,
  handleClose,
  setWins,
  setAttempts,
}) {
  const [openShare, setOpenShare] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const open = Boolean(anchorEl);

  const handleShareOnClose = (val) => {
    setOpenShare(val);
  };

  const handleResetOnClose = (val) => {
    setOpenReset(val);
  };

  return (
    <>
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
            setOpenReset(true);
            handleClose();
          }}
          disableRipple
        >
          <RestartAltRoundedIcon />
          Reset
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenShare(true);
            handleClose();
          }}
        >
          <ShareRoundedIcon />
          Social sharing
        </MenuItem>
      </StyledMenu>
      <Reset
        open={openReset}
        onClose={handleResetOnClose}
        setWins={setWins}
        setAttempts={setAttempts}
      />
      <Share open={openShare} onClose={handleShareOnClose} />
    </>
  );
}
