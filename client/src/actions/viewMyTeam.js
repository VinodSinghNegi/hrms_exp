import { VIEW_MY_TEAM, GET_ERRORS } from "./types";
import Axios from "axios";

export const viewMyTeam = skip => dispatch => {
  Axios.get(`/showteam/${skip}`)
    .then(res => {
      dispatch({
        type: VIEW_MY_TEAM,
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
