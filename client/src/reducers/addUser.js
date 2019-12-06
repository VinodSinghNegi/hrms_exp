import { DROPDOWN_DATA, FORMDATA } from "../actions/types";
var initialState={
    designation:[],
    department:[],
    reportingManager:[],
    kraAttributes:[],
    name:"",
    email:"",
    gender:"",
    selectedDepartment:{},
    selectedDesignation:{},
    selectedreportingManager:{},
    selectedkraAttributes:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case DROPDOWN_DATA:
      return {
        ...state,
        designation:action.payload.designation,
        department:action.payload.department,
        reportingManager:action.payload.reportingManager,
        kraAttributes:action.payload.kraAttributes
      };
    case FORMDATA:{
      return {
        ...state, 
        [Object.keys(action.payload)]:action.payload[Object.keys(action.payload)]
      }
    }
    default:
      return state;
  }
}