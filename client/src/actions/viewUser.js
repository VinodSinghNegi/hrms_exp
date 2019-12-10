import { VIEW_USERS } from "./types";
import Axios from "axios";

export const viewUsers = (skip) => async dispatch => {
  const res = await Axios.get(`/showemployees/${skip}`);

  dispatch({
    type: VIEW_USERS,
    payload: res.data
  });
};
