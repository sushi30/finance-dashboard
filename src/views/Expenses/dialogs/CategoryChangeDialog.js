import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({ open, data }) => (
  <Dialog
    aria-describedby="alert-dialog-description"
    aria-labelledby="alert-dialog-title"
    open={open}
  >
    <DialogTitle id="alert-dialog-title">
      Change Category for all {data.name}?
    </DialogTitle>
    <DialogActions>
      <Button
        color="primary"
        onClick={() => data.handleClose(false)}
      >
        No
      </Button>
      <Button
        autoFocus
        color="primary"
        onClick={() => data.handleClose(true)}
      >
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);
