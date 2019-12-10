import { VIEW_MY_TEAM } from "./types";
import Axios from "axios";

export const viewMyTeam = skip => async dispatch => {
  const res = await Axios.get(`/showteam/${skip}`);
  dispatch({
    type: VIEW_MY_TEAM,
    payload: res.data
  });
};
