import React, { Component } from "react";
import { connect } from "react-redux";
import notifications from "../actions/viewNotifications";

class Notifications extends Component {
  state = {};
  render() {
    return <></>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps, { notifications })(Notifications);
