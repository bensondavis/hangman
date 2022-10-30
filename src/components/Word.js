import { Box, Stack, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import "@fontsource/signika-negative";
import Hint from "./Hint";
import { useEffect, useState } from "react";

export default function Word({ value, word }) {
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("primary");

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      setButtonColor("default");
    } else {
      setButtonColor("primary");
    }
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
          <Box sx={{ letterSpacing: 10 }}>{value}</Box>
        </Typography>
        <IconButton color={buttonColor} onClick={handleClick}>
          <TipsAndUpdatesRoundedIcon />
        </IconButton>
      </Stack>
      <Hint open={open} word={word} />
    </>
  );
}
