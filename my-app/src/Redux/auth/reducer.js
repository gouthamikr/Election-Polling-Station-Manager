import {
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
} from "./actionTypes";

const initState = {
  auth: false,
  token: "",
  error: false,
  errorMessage: "",
  message: "",
  loading: false,
};

const reducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CITY_REQUEST:
      return { ...state, loading: true, error: false };

    case GET_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        otpSend: true,
        message: payload.message,
      };

    case GET_CITY_FAILURE:
      return { ...state, loading: false, errorMessage: payload.message };

    default:
      return state;
  }
};

export default reducers;
