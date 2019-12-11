import { GET_NOTIFICATIONS, GET_ERRORS } from "./types";
import Axios from "axios";
import { flush } from "./flushRedux";

export const getNotifications = () => dispatch => {
  Axios.get(`/getnotification`)
    .then(res => {
      dispatch({
        type: GET_NOTIFICATIONS,
        payload: res.data
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
