import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { setCurrentComponent } from "../../actions/componentActions";
import { connect } from "react-redux";
import FillKra from "../fillkra";
import Myprofile from "../myprofile";
import ViewKra from "../viewkra";
class Employee extends Component {
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
            this.renderComponent(<FillKra />);
          }}
        >
          <ListItemIcon>
            <InsertCommentIcon />
          </ListItemIcon>
          <ListItemText primary="Fill KRA" />
        </ListItem>
      </div>
    );
  }
}

export default connect(null, { setCurrentComponent })(Employee);
