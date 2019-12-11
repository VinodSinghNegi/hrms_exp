import { VIEW_USERS, GET_ERRORS } from "./types";
import Axios from "axios";

export const viewUsers = skip => dispatch => {
  Axios.get(`/showemployees/${skip}`)
    .then(res => {
      dispatch({
        type: VIEW_USERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
