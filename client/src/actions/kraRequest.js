import Axios from "axios";
import { KRA_REQUEST, UPDATE_KRA, UPDATED_NEW_KRA_VALUES } from "./types";
var response = null;
export const getKraRequest = () => async dispatch => {
  const res = await Axios.get("/manager/viewkra");
  console.log(res.data);
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

  var changeValue = response.cleanValue.map(element => {
    if (element._id == upid) {
      element.value = upvalue;
    }
    return element;
  });
  const updatedValues = { cleanValue: changeValue, _id: response._id };
  dispatch({
    type: UPDATE_KRA,
    payload: updatedValues
  });
};

export const submitUpdatedKra = kraData => async dispatch => {
  const res = await Axios.post("/manager/updatekra", {
    kraAttributes: kraData.cleanValue,
    krasheetId: kraData._id
  })
};
