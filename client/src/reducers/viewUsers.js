import { VIEW_USERS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case VIEW_USERS:
      return {
        ...state,
        all_users: action.payload.user,
        userlen: action.payload.userlength
      };
    default:
      return state;
  }
}
