import Axios from "axios";
import {KRA_REQUEST} from "./types"
export const getKraRequest = () => async dispatch => {
  const res = await Axios.get("/manager/viewkra");
  dispatch({
    type: KRA_REQUEST,
    payload: { ...res.data }
  });
};
