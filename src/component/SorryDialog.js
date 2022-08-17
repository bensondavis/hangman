import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Divider from "@mui/material/Divider";

export default function AlertDialog(props) {
  const {open, newGame, reveal} = props;

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sorry :("}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You couldn't finish in the given no. of chances.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={newGame}>New Challenge</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button onClick={reveal} autoFocus>
            Reveal
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    newGame: PropTypes.func.isRequired,
    reveal: PropTypes.func.isRequired,
};