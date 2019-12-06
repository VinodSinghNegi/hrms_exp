import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import "./index.css";
class Intro extends Component {
  render() {
    return (
      <MDBMask className="bg d-flex justify-content-center align-items-center">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mb-4 white-text text-center">
              <h1 className="display-3 mb-0 pt-md-5 pt-5 indigo-text font-weight-bold">
                VALUE{" "}
                <span className="orange-text font-weight-bold">CODERS </span>
                <span className="white-text font-weight-bold">HRMS</span>
              </h1>
              {/* <hr className="hr-light my-4" /> */}
              <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 orange-text font-weight-bold">
                CODE - COFFEE - REPEAT{" "}
              </h5>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="mb-4 white-text text-center" >
              <Link to="/login">
                <MDBBtn color="blue" size="md">
                  Log In
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    );
  }
}

export default Intro;
