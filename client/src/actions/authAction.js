import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  SET_CURRENT_COMPONENT,
  ADD_KRA,
  VIEW_KRA,
  DROPDOWN_DATA,
  FORMDATA
} from "./types";
import { setCurrentComponent } from "./componentActions";
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/login", userData)
    .then(res => {
      // Save to localStorage
      // // Set token to localStorage
      const { token, userdata } = res.data;

      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      // Set current user
      dispatch(setCurrentUser({ userdata: userdata }));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
// Set logged in user
export const setCurrentUser = decoded => dispatch => {
  if (decoded !== null) {
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } else {
    axios
      .get("/getuserdata")
      .then(res => {
        dispatch(setCurrentUser({ userdata: res.data }));
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  }
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => async dispatch => {
  // Remove token from local storage
  axios.get('/logout');
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  
  dispatch({
    type: SET_CURRENT_COMPONENT,
    payload: null
  });
  // dispatch({
  //   type: ADD_KRA,
  //   payload: {}
  // });
  // dispatch({
  //   type: VIEW_KRA,
  //   payload: {}
  // });
  // dispatch({
  //   type: DROPDOWN_DATA,
  //   payload: {}
  // });
  // dispatch({
  //   type: FORMDATA,
  //   payload: {}
  // });
};