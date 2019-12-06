import { DROPDOWN_DATA, FORMDATA } from "./types";
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
  const res=Axios.post('/adduser', {userdata});
  console.log(res);
};
