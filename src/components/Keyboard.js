import { Grid } from "@mui/material";
import { Button } from "@mui/material";

export default function Keyboard({alphabet, handleUsedAlphabet, handleAlphabetClick}) {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: "750px", mx: "auto", mt: 3 }}
    >
      {alphabet.map((key, index) => (
        <Grid item key={key}>
          <Button
            variant={handleUsedAlphabet(index)}
            onClick={() => {
              handleAlphabetClick(index, key);
            }}
          >
            {key}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
