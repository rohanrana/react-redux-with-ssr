import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../ActionTypes";
import axios from "axios";
export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS
  };
};

export const fetchError = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(data => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS, payload: data });

          console.log("Data In Redux", data);
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
  };
};
