import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import AddBoxIcon from "@material-ui/icons/AddBox";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PageviewIcon from "@material-ui/icons/Pageview";
import { setCurrentComponent } from "../../actions/componentActions";
import { connect } from "react-redux";
import Myprofile from "../myprofile";
import ViewKra from "../viewkra";
import AddUser from "../addUser";
import ViewUsers from "../viewUser";

class Adminfeatures extends Component {
  state = {};
  renderComponent = Component => {
    this.props.setCurrentComponent(Component);
  };
  render() {
    return (
      <div>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<Myprofile />);
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<AddUser />);
          }}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Add Employee" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<ViewUsers />);
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="View All" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
          <ListItemText primary="KRA Request" />
        </ListItem>
      </div>
    );
  }
}

export default connect(null, { setCurrentComponent })(Adminfeatures);
