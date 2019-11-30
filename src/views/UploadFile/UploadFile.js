import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MyDropZone from './components/MyDropZone';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyDropZone />
    </div>
  );
};

export default UserList;
