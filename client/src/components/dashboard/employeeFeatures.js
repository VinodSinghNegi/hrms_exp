import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { setCurrentComponent } from "../../actions/componentActions";
import { connect } from "react-redux";
import PageviewIcon from "@material-ui/icons/Pageview";
import FillKra from "../fillkra";
import Myprofile from "../myprofile";
import ViewKra from "../viewkra";

class Employee extends Component {
  state = { disabled: true };
  componentDidMount() {
    const d = new Date().getDate();
    if ((d >= 25 && d <= 30) && !this.props.kraStatus) {
      this.setState({ disabled: false });
    }
  }
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
          disabled={this.state.disabled}
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
        <ListItem
          button
          onClick={() => {
            this.renderComponent(<ViewKra />);
          }}
        >
          <ListItemIcon>
            <PageviewIcon />
          </ListItemIcon>
          <ListItemText primary="All KRA" />
        </ListItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  
  return {
  kraStatus:state.auth.user.userdata.filledKra };
};

export default connect(mapStateToProps, { setCurrentComponent })(Employee);
