import React from 'react';
import { Menu, MenuItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { SettingsOutlined, ExitToAppOutlined } from '@material-ui/icons';
import { signout } from "../store/auth";
import store from "../store";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorE1: null };
  }

  open = event => {
    this.setState({ anchorE1: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorE1: null });
  };

  onLogout = () => {
    store.dispatch(signout())
  };

  render() {
    return (
      <div>
        <Menu
          anchorEl={this.state.anchorE1}
          open={Boolean(this.state.anchorE1)}
          onClose={this.handleClose}
        >
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <MenuItem onClick={this.onLogout}>
            <ListItemIcon>
              <ExitToAppOutlined />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   signout : ()=>dispatch(signout())
// })
//
// export default connect(null, mapDispatchToProps)(TopMenu)