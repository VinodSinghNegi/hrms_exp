import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PageviewIcon from "@material-ui/icons/Pageview";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { setCurrentComponent } from "../../actions/componentActions";
import { connect } from "react-redux";
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import FillKra from "../fillkra";
import Myprofile from "../myprofile";
import ViewKra from "../viewkra";
import ViewMyTeam from "../viewMyTeam"
import {viewMyTeam} from "../../actions/viewMyTeam";
import KraRequest from "../kraRequest";
class ManagerFeatures extends Component {
  state = {};
  renderComponent = Component => {
    this.props.setCurrentComponent(Component);
  };
  componentDidMount() {
    this.props.viewMyTeam();
  }
  render() {
    const {myteam}=this.props;
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
            this.renderComponent(<KraRequest />);
          }}
        >
          <ListItemIcon>
            <NotificationImportantIcon />
          </ListItemIcon>
          <ListItemText primary="KRA Request" />
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
        <ListItem
          button
          onClick={() => {
            this.renderComponent(< ViewMyTeam myusers={myteam}/>);
          }}
        >
          <ListItemIcon>
            <GroupWorkIcon />
          </ListItemIcon>
          <ListItemText primary="My Team" />
        </ListItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return { myteam:state.myteam.myteam
    };
};

export default connect(mapStateToProps, { setCurrentComponent ,viewMyTeam})(ManagerFeatures);
