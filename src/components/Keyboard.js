import { Grid } from "@mui/material";
import { Button } from "@mui/material";

export default function Keyboard({alphabet, handleUsedAlphabet, handleAlphabetClick}) {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      sx={{ maxWidth: "750px", mt:2}}
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
