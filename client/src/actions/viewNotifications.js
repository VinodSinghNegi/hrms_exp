import { GET_NOTIFICATIONS, GET_ERRORS } from "./types";
import Axios from "axios";

export const getNotifications = () => dispatch => {
  Axios.get(`/getnotification`)
    .then(res => {
      dispatch({
        type: GET_NOTIFICATIONS,
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
