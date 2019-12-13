import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersToolbar, ExpensesTable } from './components';
import * as API from '../../API';
import CategoryChangeDialog from './dialogs/CategoryChangeDialog';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    height: '50%'
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [flows, setFlows] = useState(null);
  const [categoryDialogOpen, setCategoryDialogOpen] = React.useState(false);
  const [categoryDialogData, setCategoryDialogData] = React.useState({});

  async function getData() {
    const res = await API.getCashFlows();
    window.data = res;
    setFlows(res);
  }

  useEffect(() => {
    !flows && getData();
  });

  return (
    <div className={classes.root}>
      <CategoryChangeDialog
        data={categoryDialogData}
        open={categoryDialogOpen}
      />
      <div className={classes.content}>
        {flows ? <ExpensesTable flows={flows} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default UserList;
