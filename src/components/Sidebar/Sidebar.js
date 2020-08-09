import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Items from '../Items/Items';
import './Sidebar.css'

const drawerWidth = '25%';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    margin: '25%'
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

function Sidebar(props) {
  // const { classes } = props;

  const [sessionToken, setSessionToken] = useState(props.token);
  console.log(sessionToken)

  return (
    <div >
      <Drawer
        variant="permanent"
        anchor="left">
        <div  />
        <List>
          <Items token = {sessionToken} />
        </List>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);