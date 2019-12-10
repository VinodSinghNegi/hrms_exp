import { DROPDOWN_DATA, FORMDATA } from "../actions/types";
var initialState = {
  designation: [],
  department: [],
  reportingManager: [],
  kraAttributes: [],
  name: "",
  email: "",
  gender: "",
  error: "",
  selectedDepartment: {},
  selectedDesignation: {},
  selectedreportingManager: {},
  selectedkraAttributes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DROPDOWN_DATA:
      return {
        ...state,
        designation: action.payload.designation,
        department: action.payload.department,
        reportingManager: action.payload.reportingManager,
        kraAttributes: action.payload.kraAttributes
      };
    case FORMDATA: {
      if (action.payload === null) {
        return initialState;
      }
      return {
        ...state,
        [Object.keys(action.payload)]: action.payload[
          Object.keys(action.payload)
        ]
      };
    }
    case "ADD_USER_ERRORS": {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
}
