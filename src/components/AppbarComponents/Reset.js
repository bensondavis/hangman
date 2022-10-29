import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function Reset({ open, onClose, setWins, setAttempts }) {

  const handleAgree = () => {
    localStorage.setItem("wins", "0");
    localStorage.setItem("attempts", "1");
    setWins(localStorage.getItem("wins"));
    setAttempts(localStorage.getItem("attempts"));
    onClose(false);
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Reset your data</DialogTitle>
      <DialogContent>This will reset your scores. Are you sure about this?</DialogContent>
      <DialogActions>
        <Button onClick={handleAgree}>Agree</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
