
import axios from "axios";
import { GET_AUDIO_PROJECT_DATA_FAILURE, 
    GET_AUDIO_PROJECT_DATA_SUCCESS, 
    GET_AUDIO_PROJECT_DATA_REQUEST      
    } from "./actionTypes"; 

export const getAudioProjectData = () => (dispatch) =>{
     
     dispatch({type : GET_AUDIO_PROJECT_DATA_REQUEST}) 

     return axios.get("https://indiegogo-server.herokuapp.com/audioData")
     .then((res)=>{
        return dispatch({ type : GET_AUDIO_PROJECT_DATA_SUCCESS, payload : res.data })
     })
     .catch((error)=>{
        dispatch({ type : GET_AUDIO_PROJECT_DATA_FAILURE })
     })
}