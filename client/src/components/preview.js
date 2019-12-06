import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import { connect } from "react-redux";

class Preview extends Component {
  render() {
    const {
      name,
      email,
      gender,
      selectedDesignation,
      selectedDepartment,
      selectedreportingManager,
      selectedkraAttributes
    } = this.props.addUserForm;
    return (
      <>
        <table className="table table-sm">
          <tbody>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">Name</th>
              <td>{name}</td>
            </tr>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">Email</th>
              <td>{email}</td>
            </tr>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">Gender</th>
              <td>{gender}</td>
            </tr>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">Department</th>
              <td>{selectedDepartment.name}</td>
            </tr>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">Designation</th>
              <td>{selectedDesignation.name}</td>
            </tr>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">Reporting Manager</th>
              <td>{selectedreportingManager.name}</td>
            </tr>
            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <th scope="row">KRA Attributes</th>
              {selectedkraAttributes.map((kra)=>{
                return <tr key={kra._id}>{kra.name}</tr>
              })}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    addUserForm:state.addUserForm
  };
};

export default connect(mapStateToProps)(Preview);
