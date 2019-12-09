import { VIEW_NOTIFICATIONS } from "./types";

export default function(state = {}, action) {
  switch (action.type) {
    case VIEW_NOTIFICATIONS:
      return { notification: action.payload };//...state
    default:
      return state;
  }
}
