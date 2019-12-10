import { VIEW_MY_TEAM } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case VIEW_MY_TEAM:
      return {
        ...state,
        myteam: action.payload.team,
        teamlen: action.payload.teamlen
      };
    default:
      return state;
  }
}
