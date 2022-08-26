import * as types from "./actionTypes";

const initState = {
    isAuth : false,
    userInfo : {},
    isLoading : false,
    isError : false ,
   
} 

const authReducer = (state = initState, action) =>{
    const  { type, payload }=action
     switch (type){
        
            case types.REGISTER_REQUEST:{
              return { ...state, isLoading: true };
            }
        
            case types.REGISTER_SUCCESS:{
              return { ...state, isLoading: false , userInfo:payload};
            }
            case types.REGISTER_FAILURE:{
              return { ...state, isLoading: false, isError: true };}
        
            case types.LOGIN_REQUEST:{
              return { ...state, isLoading: true };}


            case types.LOGIN_SUCCESS:{
          
              return { ...state, isLoading: false, isAuth: true, userInfo: payload };
            }
            case types.LOGIN_FAILURE:{
              return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            
              };
            }
            
            default:
              return state;
          }
        };
        
        export { authReducer };


