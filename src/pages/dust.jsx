import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PepleIcon from '@material-ui/icons/People';
import SmsIcon from '@material-ui/icons/Sms';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import AppsIcon from '@material-ui/icons/Apps';
import Paper from '@material-ui/core/Paper';
import ProductTable from './table/product_table';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
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
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              BIJOY-POINT OF SALE
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
                <ListItemIcon><DashboardIcon/></ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><AppsIcon/></ListItemIcon>
                <ListItemText primary="Products"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><DeviceHubIcon/></ListItemIcon>
                <ListItemText primary="Products Catalogries"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><PepleIcon/></ListItemIcon>
                <ListItemText primary="Suppliers"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><PepleIcon/></ListItemIcon>
                <ListItemText primary="Customers"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
                <ListItemText primary="Sales"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><LibraryBooksIcon/></ListItemIcon>
                <ListItemText primary="Sales Report"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><PepleIcon/></ListItemIcon>
                <ListItemText primary="Users"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><SmsIcon/></ListItemIcon>
                <ListItemText primary="SMS"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText primary="Setting"/>
            </ListItem>
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <div className={classes.inlineList}>
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
                <ProductTable/>
                <ProductTable/>
                <ProductTable/>
            </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
