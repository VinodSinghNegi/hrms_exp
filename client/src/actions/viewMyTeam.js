import { VIEW_MY_TEAM } from "./types";
import Axios from "axios";

export const viewMyTeam = skip => async dispatch => {
  const res = await Axios.get(`/showteam/${skip}`);
  console.log(res.data, "daattataa");
  dispatch({
    type: VIEW_MY_TEAM,
    payload: res.data
  });
};
