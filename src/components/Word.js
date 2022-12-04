import { Box, Stack, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import "@fontsource/signika-negative";
import Hint from "./Hint";
import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from '@mui/material/Zoom';

const delay = 3;

export default function Word({ value, word }) {
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("primary");

  const handleClick = () => {
    setOpen(true);
    setButtonColor("default");
  };

  useEffect(() => {
    let timer = setTimeout(() => {setOpen(false); setButtonColor("primary");}, delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <>
      <Stack direction={"row"} alignItems="center" justifyContent={"center"}>
        <Typography
          component={"div"}
          sx={{ textTransform: "uppercase", maxWidth: "750px", ml: "50px" }}
          fontSize={"4rem"}
          fontFamily={"Signika Negative"}
        >
          <Box sx={{ letterSpacing: 10, pointerEvents: "none" }}>{value}</Box>
        </Typography>
        <Tooltip TransitionComponent={Zoom} title="Hint">
          <IconButton color={buttonColor} onClick={handleClick} sx={{mb:4}}>
            <TipsAndUpdatesRoundedIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Hint open={open} word={word} />
    </>
  );
}
