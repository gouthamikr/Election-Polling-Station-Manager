import {
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
  GET_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
  auth: false,
  token: "",
  error: false,
  errorMessage: "",
  cityData: [],
  loading: false,
};

const reducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CITY_REQUEST:
      return { ...state, loading: true, error: false };

    case GET_CITY_SUCCESS:
      console.log(payload.data);
      return {
        ...state,
        loading: false,
        cityData: payload.data,
      };

    case GET_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: "get city request failed",
      };

    case GET_DATA_SUCCESS:
      console.log(payload.data);
      return {
        ...state,
        loading: false,
        totalData: payload.totalData,
      };

    default:
      return state;
  }
};

export default reducers;
