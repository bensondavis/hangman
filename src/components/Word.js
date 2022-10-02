import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import "@fontsource/signika-negative";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Word({ value }) {
  return (
    <Stack
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {value.map((key, index) => (
        <ThemeProvider key={index} theme={theme}>
          <Typography
            variant="h2"
            fontFamily={"Signika Negative"}
            sx={{
              color: "text.primary",
              fontWeight: "light",
              textTransform: "uppercase",
            }}
          >
            {key}
          </Typography>
        </ThemeProvider>
      ))}
    </Stack>
  );
}
