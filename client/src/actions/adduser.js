import { DROPDOWN_DATA, FORMDATA, GET_ERRORS } from "./types";
import Axios from "axios";

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
    console.log(res.data, 'res from adduser action')
    dispatch({
      type: FORMDATA,
      payload: null
    });
  }).catch(()=>{
    dispatch({
      type:GET_ERRORS,
      payload:""
    })
  })
};
