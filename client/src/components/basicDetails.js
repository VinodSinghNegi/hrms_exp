import React, { Component } from "react";
import { MDBFormInline, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { formData } from "../actions/adduser";

class BasicDetails extends Component {
  onClick = nr => () => {
    this.props.formData({ gender: nr });
  };

  render() {
    return (
      <div style={{ maxWidth: "350px", margin: "0 auto" }}>
        <MDBInput
          label="User name"
          icon="user"
          type="text"
          value={this.props.name}
          onChange={e => {
            this.props.formData({ name: e.target.value });
          }}
        />
        <MDBInput
          label="User email"
          icon="envelope"
          type="email"
          value={this.props.email}
          onChange={e => {
            this.props.formData({ email: e.target.value });
          }}
        />

        <MDBFormInline>
          <MDBInput
            onClick={this.onClick("Male")}
            checked={this.props.gender === "Male" ? true : false}
            label="Male"
            type="radio"
            id="radio1"
            containerClass="mr-5"
          />
          <MDBInput
            onClick={this.onClick("Female")}
            checked={this.props.gender === "Female" ? true : false}
            label="Female"
            type="radio"
            id="radio2"
            containerClass="mr-5"
          />
        </MDBFormInline>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name, email, gender } = state.addUserForm;
  return {
    name,
    email,
    gender
  };
};

export default connect(mapStateToProps, { formData })(BasicDetails);
