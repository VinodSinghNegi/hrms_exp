import { VIEW_KRA, ADD_KRA, EDIT_KRA } from "./types";
import Axios from "axios";

// ACTION WHICH GETS ALL THE KRA SHEETS OF USER
export const viewkra = year => async dispatch => {
  const res = await Axios.get(`/user/viewkra/${year}`);
  dispatch({
    type: VIEW_KRA,
    payload: res.data
  });
};

// ACTION WHICH SUBMITS USER FILLED KRA TO REDUX
export const addkra = kradata => async dispatch => {
  dispatch({
    type: ADD_KRA,
    payload: kradata
  });
};

// ACTION WHICH SUBMITS USER FILLED KRA TO BACKEND
export const submitkra = kradata => async dispatch => {
  const res = await Axios.post("/user/addkra", { kradata });
  console.log(res.data);
};
