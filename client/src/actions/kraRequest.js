import Axios from "axios";
import { KRA_REQUEST, UPDATE_KRA, GET_ERRORS } from "./types";
import { setCurrentComponent } from "./componentActions";
import KraRequest from "../components/kraRequest";
import React from "react";

var response = null;
export const getKraRequest = () => async dispatch => {
  const res = await Axios.get("/manager/viewkra");
  dispatch({
    type: KRA_REQUEST,
    payload: res.data
  });
};

export const updateKra = sheetId => async dispatch => {
  Axios.get(`/manager/viewkrauser/${sheetId}`)
    .then(res => {
      response = res.data;
      dispatch({
        type: UPDATE_KRA,
        payload: response
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// ACTION WHICH SUBMITS USER FILLED KRA TO REDUX
export const UpdatedkraValues = kradata => async dispatch => {
  const upid = kradata.Attributesid;
  const upvalue = kradata.value;

  var changeValue = response.cleanValue.map(element => {
    if (element._id === upid) {
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

export const submitUpdatedKra = (kraData, userid) => async dispatch => {
  try {
    await Axios.post("/manager/updatekra", {
      kraAttributes: kraData.cleanValue,
      krasheetId: kraData._id,
      userId: userid
    });
    dispatch(setCurrentComponent(<KraRequest />));
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
