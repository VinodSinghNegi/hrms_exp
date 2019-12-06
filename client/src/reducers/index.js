import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import componentReducer from "./componentReducer";
import addUser from "./addUser";
import addKra from "./addKra";
import kraRequest from "./kraRequestReducer";
import viewUsers from "./viewUsers";

export default combineReducers({
  auth: authReducer,
  addUserForm: addUser,
  addKra: addKra,
  showTab: componentReducer,
  kraRequest: kraRequest,
  errors: errorReducer,
  allusers: viewUsers
});
