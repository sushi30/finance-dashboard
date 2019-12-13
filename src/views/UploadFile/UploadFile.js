import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MyDropZone from './components/MyDropZone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  paper: { padding: theme.spacing(3, 2), maxWidth: 400 }
}));

const UploadFile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyDropZone
        hoverComponent={() => (
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Upload Files
            </Typography>
            <Typography component="p">
             Drop files here.
            </Typography>
          </Paper>
        )}
        standbyComponent={() => (
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Upload Files
            </Typography>
            <Typography component="p">
              Drag here csv, xls or xlsx files.
            </Typography>
          </Paper>
        )}
      />
    </div>
  );
};

export default UploadFile;
