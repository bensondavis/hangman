import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { Typography } from "@mui/material";

export default function Hearts({hearts}) {
  return (
    <Stack
      spacing={1}
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ mt: 3 }}
    >
      {hearts.map((i) => (
        <Typography key={i} variant="h3">
          <FavoriteIcon sx={{ color: red.A400 }} />
        </Typography>
      ))}
    </Stack>
  );
}
