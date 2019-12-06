import { KRA_REQUEST } from "../actions/types";
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case KRA_REQUEST:
      return {
        ...state,
        kraRequest: action.payload
      };
    default:
      return state;
  }
}
