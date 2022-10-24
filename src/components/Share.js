import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {
  Twitter,
  Facebook,
  Linkedin,
  Whatsapp,
  Telegram,
  Mail,
  Pinterest,
} from "react-social-sharing";

export default function Share({ open, onClose }) {
  const score = (
    (+localStorage.getItem("wins") / +localStorage.getItem("attempts")) *
    100
  ).toFixed(2);
  const msg = `Can you beat my high score of ${score}%?\nTry Hangman`;
  const url = "https://bensondavis.github.io/hangman";
  function handleClose() {
    onClose(0);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Social sharing</DialogTitle>
      <DialogContent>
        <Twitter solid small message={msg} link={url} />
        <Facebook solid small message={msg} link={url} />
        <Linkedin solid small message={msg} link={url} />
        <Whatsapp solid small message={msg} link={url} />
        <Telegram solid small message={msg} link={url} />
        <Mail solid small subject={msg} link={url} />
        <Pinterest solid small message={msg} link={url} />
      </DialogContent>
    </Dialog>
  );
}
