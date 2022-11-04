import axios from "axios";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { Box, Collapse, Typography } from "@mui/material";



export default function Hint({ word, open }) {
  const [hints, setHints] = useState([]);
  const url = `https://api.datamuse.com/words?ml=${word}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setHints([
          response.data[0].word,
          response.data[1].word,
          response.data[2].word,
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
      <Box sx={{ m: 1 }}>
        <Collapse in={open}>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography>Related words :</Typography>
            {hints.map((key, index) => (
              <Chip label={key} color="primary" key={index} sx={{ mr: 1 }} />
            ))}
          </Stack>
        </Collapse>
      </Box>
  );
}
