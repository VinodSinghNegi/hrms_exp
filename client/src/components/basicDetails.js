import React, { Component } from "react";
import { MDBFormInline, MDBInput } from "mdbreact";
import styled from "@emotion/styled";
import Select from "react-dropdown-select";
import { connect } from "react-redux";
import { formData } from "../actions/adduser";

class BasicDetails extends Component {
  onClick = nr => () => {
    this.props.formData({ gender: nr });
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
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
        {/* <MDBFormInline>
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
        </MDBFormInline> */}
        <p>Gender</p>
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
        {/* <StyledSelect
          // placeholder={selectedDesignation.name || "Designation"}
          color="orange"
          dropdownHandle="true"
          dropdownHeight="300px"
          direction="ltr"
          values={[{ name: this.props.gender }]}
          labelField="name"
          valueField="name"
          options={[{ name: "Male" }, { name: "FeMale" }]}
          keepSelectedInList={true}
          onChange={value => this.props.formData({ gender: value[0].name })}
          noDataLabel="No matches found"
        /> */}
      </div>
    );
  }
}

const StyledSelect = styled(Select)`
  ${({ dropdownRenderer }) =>
    dropdownRenderer &&
    `.react-dropdown-select-dropdown {
overflow: initial;
}`}
`;

const mapStateToProps = state => {
  const { name, email, gender } = state.addUserForm;
  return {
    name,
    email,
    gender
  };
};

export default connect(mapStateToProps, { formData })(BasicDetails);
