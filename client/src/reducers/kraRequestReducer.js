import { KRA_REQUEST, UPDATE_KRA,UPDATED_NEW_KRA_VALUES } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case KRA_REQUEST:
      return {
        ...state,
        kraRequest: action.payload
      };
    case UPDATE_KRA:
      return { ...state, updateKraField: action.payload };

    // case UPDATED_NEW_KRA_VALUES:
    //   const arr = state.updateKraField.kraSheet[0].kraAttributes.filter(kra => {
    //     return  kra.Attributesid != action.payload.Attributesid ? true : false;
    //   });
    //   console.log(state)

    //   return { ...state, [state.updateKraField.kraSheet[0].kraAttributes]: [action.payload, ...arr] };
    default:
      return state;
  }
}
