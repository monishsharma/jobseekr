import * as actionTypes from "../actions/actiontypes";

const initialState = {
  isAuthenticated: true,
  token: "",
  savedJobs: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.authState,
        token: action.token,
      };
      break;

    case actionTypes.SAVE_JOBS:
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.job],
      };
      break;

    default:
      return state;
      break;
  }
};

export default authReducer;
