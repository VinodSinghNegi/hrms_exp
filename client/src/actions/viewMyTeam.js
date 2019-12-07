import { VIEW_MY_TEAM } from "./types";
import Axios from "axios";

export const viewMyTeam = () => async dispatch => {
  const res = await Axios.get(`/showteam`);
  console.log(res.data);
  dispatch({
    type: VIEW_MY_TEAM,
    payload: res.data
  });
};
