import {SET_CURRENT_COMPONENT} from '../actions/types';

const initialState = {
  
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_COMPONENT:
      return {
        ...state,
        comp: action.payload
      };
    case "SET_NULL":
    return{
      state
    }
    default:
      return state;
  }
}
