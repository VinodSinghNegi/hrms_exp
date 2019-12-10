import { KRA_REQUEST, UPDATE_KRA } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case KRA_REQUEST:
      return {
        ...state,
        kraRequest: action.payload
      };
    case UPDATE_KRA:
      return { ...state, updateKraField: action.payload };

    default:
      return state;
  }
}
