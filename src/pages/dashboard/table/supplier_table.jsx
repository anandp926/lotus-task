import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SortIcon from '@material-ui/icons/Sort';

const CustomTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 14
  },
}))(TableCell);

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  tableRapperHeader: {
    display: 'flex',
    backgroundColor: '#e0dede',
    color: theme.palette.common.black,
    padding: theme.spacing.unit * 1,
    borderBottom: '3px solid #07c5f4',
  },
  tableHeading: {
    width: '50%',
    textAlign: 'left',
    fontWeight: 'lighter'
  },
  tableAction: {
    width: '50%',
    textAlignLast: 'right'
  }
});

const BodyData = (props) => {
    const { classes, supplier } = props;
    if(supplier !== undefined && supplier.length === 0){
        return(
            <TableBody>
                <TableRow className={classes.row}>
                <TableCell align="center" colSpan={2}>No Data</TableCell>
                </TableRow>
            </TableBody>
            
        )
    }else if(supplier !== undefined && supplier.length > 0){
        return (
            <TableBody>
                {supplier.map((supplier) => (
                    <TableRow className={classes.row} key={supplier.id}>
                    <CustomTableCell component="th" scope="row">
                        {supplier.name}
                    </CustomTableCell>
                    <CustomTableCell align="right">{supplier.phone}</CustomTableCell>
                    </TableRow>
                ))}
            </TableBody>
        )
    }else return null
}

function SupplierTable(props) {
  const { classes, suppliers } = props;
  return (
    <Paper className={classes.root}>
      <div className={classes.tableRapperHeader}>
        <div className={classes.tableHeading}>
        ALL SUPPLIERS
        </div>
        <div className={classes.tableAction}>
        <SortIcon/>
        </div>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell align="right">Contact</CustomTableCell>
          </TableRow>
        </TableHead>
        <BodyData supplier={suppliers} classes={classes}/>
      </Table>
    </Paper>
  );
}

SupplierTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SupplierTable);