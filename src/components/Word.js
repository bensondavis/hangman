import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import "@fontsource/signika-negative";

export default function Word({ value }) {
  return (
    <Stack
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {value.map((key, index) => (
          <Typography
            fontFamily={"Signika Negative"}
            fontSize={"4rem"}
            sx={{
              color: "text.primary",
              fontWeight: "light",
              textTransform: "uppercase",
            }}
            key={index}
          >
            {key}
          </Typography>
      ))}
    </Stack>
  );
}
