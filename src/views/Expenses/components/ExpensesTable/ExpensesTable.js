import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';
import * as API from '../../../../API';
import MaterialTable from 'material-table';
import AutoSuggestCategory from './AutoSuggestCategory';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const ExpensesTable = props => {
  const {
    className,
    flows,
    setCategoryDialogData,
    setCategoryDialogOpen,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <MaterialTable
          columns={[
            {
              title: 'Date',
              field: 'date',
              type: 'date',
              editable: 'never',
              render: rowData => moment(rowData.date).format('DD/MM/YYYY')
            },
            { title: 'Name', field: 'name', editable: 'never' },
            {
              title: 'Value',
              field: 'value',
              type: 'numeric',
              editable: 'never'
            },
            {
              title: 'Category',
              field: 'category',
              editComponent: ({ value, onChange }) => (
                <AutoSuggestCategory
                  onChange={(e, { newValue }) => onChange(newValue)}
                  suggestions={flows
                    .map(f => f.category)
                    .filter(s => s != null)
                    .sort()}
                  value={value || ''}
                />
              )
            }
          ]}
          data={flows}
          editable={{
            onRowUpdate: async (newData, oldData) => {
              if (oldData.category !== newData.category) {
                setCategoryDialogData({
                  name: newData.name,
                  handleClose: async changeAll => {
                    if (changeAll) {
                      await API.putCashFlowMapping({
                        source: newData.source,
                        name: newData.name,
                        category: newData.category,
                        id: newData.id
                      });
                    } else {
                      await fetch(process.env.REACT_APP_ENDPOINT + '/mapping', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          source: newData.source,
                          id: newData.id,
                          category: newData.category
                        })
                      });
                    }
                    setCategoryDialogOpen(false);
                  }
                });
              }
              setCategoryDialogOpen(true);
            }
          }}
          options={{
            filtering: true,
            pageSize: 10,
            actionsColumnIndex: -1
          }}
          title={'Cash Flows'}
        />
      </CardContent>
    </Card>
  );
};

ExpensesTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default ExpensesTable;
