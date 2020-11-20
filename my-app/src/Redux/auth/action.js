import {
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
  GET_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getCitySuccess = (data) => ({
  type: GET_CITY_SUCCESS,
  payload: {
    data,
  },
});

export const getCityFailure = (payload) => ({
  type: GET_CITY_FAILURE,
  payload,
});

export const getCityRequest = (payload) => ({
  type: GET_CITY_REQUEST,
  payload,
});
export const getDataSuccess = (totalData) => ({
  type: GET_DATA_SUCCESS,
  payload: {
    totalData,
  },
});

export const getCity = () => (dispatch) => {
  dispatch(getCityRequest());
  axios
    .get("http://localhost:5000/api/data")
    .then((res) => {
      console.log(res.data.data);
      dispatch(getDataSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getCityFailure());
    });
};
