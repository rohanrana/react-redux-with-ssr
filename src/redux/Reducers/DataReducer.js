import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../ActionTypes";

const INIT_STATE = {
  error: "",
  loading: false,
  message: "",
  data:[]
};

const DataReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: "", message: "", loading: true };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: "",
        message: "",
        loading: false,
        data: action.payload
      };
    }

    case FETCH_ERROR: {
      return { ...state, loading: false, error: action.payload, message: "" };
    }

    default:
      return state;
  }
};
export default DataReducer;
