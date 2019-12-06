import React from "react";
import styled from "@emotion/styled";
import Select from "react-dropdown-select";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import { formData, getDropdown } from "../actions/adduser";

export class OfficialDetails extends React.Component {
  componentDidMount() {
    this.props.getDropdown();
  }

  render() {
    const {
      designation,
      department,
      kraAttributes,
      reportingManager,
      selectedDepartment,
      selectedDesignation,
      selectedreportingManager,
      selectedkraAttributes
    } = this.props.addUserForm;
    return (
      <MDBContainer>
        <div style={{ maxWidth: "350px", margin: "0 auto" }}>
          Designation
          <StyledSelect
            multi={false}
            color="orange"
            searchBy="name"
            searchable={true}
            dropdownHandle={true}
            dropdownHeight="300px"
            direction="ltr"
            values={[selectedDesignation]}
            labelField="name"
            valueField="name"
            options={designation}
            onChange={value =>
              this.props.formData({ selectedDesignation: value[0] })
            }
            noDataLabel="No matches found"
          />
        </div>
        <br />
        <div style={{ maxWidth: "350px", margin: "0 auto" }}>
          <StyledSelect
            placeholder={selectedDepartment.name || "Department"}
            color="orange"
            searchBy="name"
            searchable="true"
            dropdownHandle="true"
            dropdownHeight="300px"
            direction="ltr"
            values={[selectedDepartment]}
            labelField="name"
            valueField="name"
            options={department}
            keepSelectedInList={true}
            onChange={value =>
              this.props.formData({ selectedDepartment: value[0] })
            }
            noDataLabel="No matches found"
          />
        </div>
        <br />
        <div style={{ maxWidth: "350px", margin: "0 auto" }}>
          <StyledSelect
            placeholder={selectedreportingManager.name || "Reporting Manager"}
            color="orange"
            searchBy="name"
            searchable="true"
            dropdownHandle="true"
            dropdownHeight="300px"
            direction="ltr"
            values={[selectedreportingManager]}
            labelField="name"
            valueField="name"
            options={reportingManager}
            keepSelectedInList={true}
            onChange={value =>
              this.props.formData({ selectedreportingManager: value[0] })
            }
            noDataLabel="No matches found"
          />
        </div>
        <br />
        <div style={{ maxWidth: "350px", margin: "0 auto" }}>
          <StyledSelect
            placeholder="KraAttributes"
            color="orange"
            searchBy="name"
            searchable={true}
            dropdownHandle={true}
            dropdownHeight="300px"
            direction="ltr"
            values={selectedkraAttributes}
            dropdownPosition="bottom"
            multi={true}
            labelField="name"
            valueField="name"
            options={kraAttributes}
            keepSelectedInList={true}
            onChange={value => {
              this.props.formData({ selectedkraAttributes: value });
            }}
            noDataLabel="No matches found"
          />
        </div>
      </MDBContainer>
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
  return {
    addUserForm: state.addUserForm
  };
};

export default connect(mapStateToProps, { formData, getDropdown })(
  OfficialDetails
);
