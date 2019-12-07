import {
  KRA_REQUEST,
  UPDATE_KRA,
  UPDATED_NEW_KRA_VALUES
} from "../actions/types";

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
