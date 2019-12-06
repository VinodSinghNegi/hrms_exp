import { ADD_KRA, VIEW_KRA } from "../actions/types";

const initialstate = {
  fillKra: [],
  viewKraData: []
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case ADD_KRA:
      // restricting duplicacy 
      const arr = state.fillKra.filter(kra => {
        return kra.Attributesid != action.payload.Attributesid ? true : false;
      });

      return { ...state, fillKra: [action.payload, ...arr] };

    case VIEW_KRA:
      return { ...state, viewKraData: action.payload };
    default:
      return state;
  }
}
