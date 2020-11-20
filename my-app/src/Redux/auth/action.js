import {
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const getCitySuccess = (payload) => ({
  type: GET_CITY_SUCCESS,
  payload,
});

export const getCityFailure = (payload) => ({
  type: GET_CITY_FAILURE,
  payload,
});

export const getCityRequest = (payload) => ({
  type: GET_CITY_REQUEST,
  payload,
});

export const getCity = () => (dispatch) => {
  dispatch(getCityRequest());
  axios
    .post("http://localhost:5000/api/data")
    .then((res) => {
      dispatch(getCitySuccess(res.data));
    })
    .catch((error) => {
      dispatch(getCityFailure());
    });
};
