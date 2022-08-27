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

const login = (email, password) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios

    .get("https://indiegogo-server.herokuapp.com/user")
    .then((r) => { 
         
      console.log(email, password) 
      let flag = false;
      for( let i = 0; i < r.data.length; i++)
      {
          if(r.data[i].email === email && r.data[i].password === password)
          {  
            flag = true;
             return dispatch({ type: types.LOGIN_SUCCESS, payload: r.data[i] });
          }
      }
      if(flag === false){
        return "Invalid email or password"
      }
      

    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE});
    });
};

export {login, register}
