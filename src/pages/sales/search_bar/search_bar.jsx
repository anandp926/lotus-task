import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
};

class SearchBar extends Component {
    state = {
        searchText: ''
    }

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
    const { classes } = this.props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} value={this.state.searchText} placeholder="Search Customer" name="searchText" onChange={this.inputChange} />
      <IconButton className={classes.iconButton} aria-label="Search" onClick={()=>this.props.search(this.state.searchText)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);