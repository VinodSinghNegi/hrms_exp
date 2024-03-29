import { DROPDOWN_DATA, FORMDATA, GET_ERRORS } from "./types";
import Axios from "axios";
import { setCurrentComponent } from "./componentActions";
import Alluser from "../components/viewUser";
import React from "react";
import { flush } from "./flushRedux";

export const getDropdown = () => dispatch => {
  Axios.get("/getseeds")
    .then(res => {
      dispatch({
        type: DROPDOWN_DATA,
        payload: { ...res.data }
      });
    })
    .catch(err => {
      if (err.response.data.error === "Please authenticate") {
        dispatch(flush());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const formData = formdata => dispatch => {
  dispatch({
    type: FORMDATA,
    payload: formdata
  });
};

export const saveUser = userdata => async dispatch => {
  Axios.post("/adduser", { userdata })
    .then(val => {
      dispatch({
        type: "ADD_USER_ERRORS",
        payload: "verification mail has been send to user on desired mail id"
      });
      dispatch({
        type: FORMDATA,
        payload: null
      });
      dispatch(setCurrentComponent(<Alluser />));
    })
    .catch(err => {
      if (err.response.data.error === "Please authenticate") {
        dispatch(flush());
      }
      dispatch({
        type: "ADD_USER_ERRORS",
        payload: err.response.data
      });
    });
};
