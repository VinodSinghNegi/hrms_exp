import { VIEW_USERS } from "./types";
import Axios from "axios";

export const viewUsers = () => async dispatch => {
  const res = await Axios.get(`/showemployees`);
  dispatch({
    type: VIEW_USERS,
    payload: res.data
  });
};
