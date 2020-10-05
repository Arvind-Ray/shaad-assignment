import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: 650,
    marginTop: 40,
    backgroundColor: '#f50057',
  },
  table: {
    minWidth: 300,
  },
  title: {
    color: 'white'
  }
});

export default function CustomTable({data = []}) {
  const classes = useStyles();

  if(!Array.isArray(data) && data.length === 0) return null;

  return (
    <TableContainer component={Paper} className={classes.mainContainer}>
      <Table className={classes.table} aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>ID</TableCell>
            <TableCell className={classes.title}>Tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell>{row.task}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// CustomTable.propTypes = {
//     data: PropTypes.object,
// };