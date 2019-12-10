import { DROPDOWN_DATA, FORMDATA, GET_ERRORS } from "./types";
import Axios from "axios";
import { setCurrentComponent } from "./componentActions";
import Alluser from "../components/viewUser";
import React from "react";
export const getDropdown = () => async dispatch => {
  const res = await Axios.get("/getseeds");
  dispatch({
    type: DROPDOWN_DATA,
    payload: { ...res.data }
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
    })
    .catch(e => {
      dispatch({
        type: "ADD_USER_ERRORS",
        payload: e.response.data
      });
    });
};
