const initialState={
    comp:null
}
export default function(state = initialState, action) {
    switch (action.type) {
      
      case "SET_CURRENT_COMPONENT" :
        return {
          ...state,
          comp:action.payload
        };
      default:
        return state;
    }
  }