import Axios from "axios";
import { KRA_REQUEST, UPDATE_KRA, UPDATED_NEW_KRA_VALUES } from "./types";
var response = null;
export const getKraRequest = () => async dispatch => {
  const res = await Axios.get("/manager/viewkra");
  dispatch({
    type: KRA_REQUEST,
    payload: res.data
  });
};

export const updateKra = sheetId => async dispatch => {
  await Axios.get(`/manager/viewkrauser/${sheetId}`).then(res => {
    response = res.data;
    dispatch({
      type: UPDATE_KRA,
      payload: response
    });
  });
};

// ACTION WHICH SUBMITS USER FILLED KRA TO REDUX
export const UpdatedkraValues = kradata => async dispatch => {
  const upid = kradata.Attributesid;
  const upvalue = kradata.value;

  var changeValue = response.kraSheet[0].kraAttributes.map(element => {
    if (element._id == upid) {
      element.value = upvalue;
    }
    return element;
  });
  console.log(changeValue);
  console.log(response);

  dispatch({
    type: UPDATE_KRA,
    payload: changeValue
  });
};

export const submitUpdatedKra = (kraData, kraSheetId) => async dispatch => {
  console.log("in sub", kraData, kraSheetId);
};
