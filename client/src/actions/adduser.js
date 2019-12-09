import { DROPDOWN_DATA, FORMDATA, GET_ERRORS } from "./types";
import Axios from "axios";
import { setCurrentComponent } from "./componentActions";
import Alluser from '../components/viewUser';
import React from 'react'
export const getDropdown = () => async dispatch => {
  const res = await Axios.get("/getseeds");
  dispatch({
    type: DROPDOWN_DATA,
    payload: {...res.data}
  });
};

export const formData = formdata => dispatch => {
  dispatch({
    type: FORMDATA,
    payload: formdata
  });
};

export const saveUser = userdata => dispatch => {
  Axios.post('/adduser', {userdata}).then((res)=>{
    dispatch({
      type:FORMDATA,
      payload:null
    })
    dispatch(setCurrentComponent(<Alluser/>))
  }).catch((e)=>{
    dispatch({
      type:FORMDATA,
      payload:{error:"Failed to add user try again !"}
    })
  })
};
