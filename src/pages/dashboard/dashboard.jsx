import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PepleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import Paper from '@material-ui/core/Paper';
import ProductTable from './table/product_table';
import CustomerTable from './table/customer_table';
import SupplierTable from './table/supplier_table';
import {getAllCustomer} from '../../service/api/customers';
import {getAllProducts} from '../../service/api/products';
import {getAllSuppliers} from '../../service/api/supplier'

const styles = theme => ({
  paperStyle: {
    ...theme.mixins.gutters(),
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    width: 220
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  inlineList: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      transform: 'translateZ(0)',
      flexWrap: 'wrap',
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: '#fff'
  },
  iconBack: {
    margin: theme.spacing.unit,
    size: 64,
    borderRadius: 32
  },
  tableList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    transform: 'translateZ(0)',
    flexWrap: 'wrap',
}
});

class Dashboard extends React.Component {

  state = {
      customers: [],
      suppliers: [],
      products: []
  }

  customerCallback = (data) => {
      if(data.status === 200){
          this.setState({customers: data.data.data})
      }else{
          console.log(data.response)
      }
  }

  productCallback = (data) => {
        if(data.status === 200){
            this.setState({products: data.data.data})
        }else{
            console.log(data.response)
        }
  }

  supplierCallback = (data) => {
    if(data.status === 200){
        this.setState({suppliers: data.data.data})
    }else{
        console.log(data.response)
    }
  }

  componentDidMount() {
      getAllCustomer(this.customerCallback);
      getAllProducts(this.productCallback);
      getAllSuppliers(this.supplierCallback);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
          <div className={classes.inlineList}>
            <Link to="sales" style={{textDecoration:'none', color: '#fff'}}>
                <Paper className={classes.paperStyle} elevation={1}>
                    <div 
                        className={classes.iconBack} 
                        style={{backgroundColor: '#07c5f4',}}>
                        <ShoppingCartIcon className={classes.icon}/>
                    </div>
                    <Typography variant="h5" component="h3">
                        <b>SALES</b>
                    </Typography>
                </Paper>
            </Link>
            <Paper className={classes.paperStyle} elevation={1}>
                <div 
                    className={classes.iconBack} 
                    style={{backgroundColor: '#f4720e',}}>
                    <LibraryBooksIcon className={classes.icon}/>
                </div>
                <Typography variant="h5" component="h3">
                    <b>REPORT</b>
                </Typography>
            </Paper>
            <Paper className={classes.paperStyle} elevation={1}>
                <div 
                    className={classes.iconBack} 
                    style={{backgroundColor: '#9809f7',}}>
                    <PepleIcon className={classes.icon}/>
                </div>
                <Typography variant="h5" component="h3">
                    <b>USERS</b>
                </Typography>
            </Paper>
            <Paper className={classes.paperStyle} elevation={1}>
                <div 
                    className={classes.iconBack} 
                    style={{backgroundColor: '#f4a804',}}>
                    <SettingsIcon className={classes.icon}/>
                </div>
                <Typography variant="h5" component="h3">
                    <b>SETTING</b>
                </Typography>
            </Paper>
        </div>
        <div className={classes.tableList}>
            <ProductTable products={this.state.products}/>
            <SupplierTable suppliers={this.state.suppliers}/>
            <CustomerTable customers={this.state.customers}/>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
