import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersToolbar, UsersTable } from './components';
import * as API from '../../API';

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

  const [flows, setFlows] = useState(null);

  async function getData() {
    const res = await API.getCashFlows();
    setFlows(res);
  }

  useEffect(() => {
    !flows && getData();
  });

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        {flows ? <UsersTable users={flows} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default UserList;
