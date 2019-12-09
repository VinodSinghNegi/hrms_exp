import { GET_NOTIFICATIONS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}
