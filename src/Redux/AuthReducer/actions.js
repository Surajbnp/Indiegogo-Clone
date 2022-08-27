import axios from "axios";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://indiegogo-server.herokuapp.com/user", payload)
    .then((r) => {
     return  dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://indiegogo-server.herokuapp.com/user/login", params)
    .then((r) => {
    console.log(r);
      return  dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};

export {login, register
}
