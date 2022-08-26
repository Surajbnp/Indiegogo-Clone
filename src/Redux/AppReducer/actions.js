
import axios from "axios";
import { 
    GET_AUDIO_PROJECT_DATA_FAILURE, 
    GET_AUDIO_PROJECT_DATA_SUCCESS, 
    GET_AUDIO_PROJECT_DATA_REQUEST, 
    FILTER_AUDIO_PROJECT_DATA_FAILURE, 
    FILTER_AUDIO_PROJECT_DATA_REQUEST, 
    FILTER_AUDIO_PROJECT_DATA_SUCCESS, 
    SORT_AUDIO_DATA_FAILURE,
    SORT_AUDIO_DATA_REQUEST, 
    SORT_AUDIO_DATA_SUCCESS    
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

export const filterAudioData = (value) =>(dispatch)=>{

   dispatch({type : FILTER_AUDIO_PROJECT_DATA_REQUEST}) 

   return axios.get(`https://indiegogo-server.herokuapp.com/audioData?status=${value}`)
   .then((res)=>{
      //console.log(res.data)
      return dispatch({ type : FILTER_AUDIO_PROJECT_DATA_SUCCESS, payload : res.data})
      
   })
   .catch((error)=>{
      dispatch({ type : FILTER_AUDIO_PROJECT_DATA_FAILURE})
   })
} 

export const sortAudioData = (value)=>(dispatch) =>{
   dispatch({ type : SORT_AUDIO_DATA_REQUEST}) 

   return axios.get(`https://indiegogo-server.herokuapp.com/audioData?_sort=fund&_order=${value}`)
   .then((res)=>{
      console.log("action", res)
     return dispatch({ type : SORT_AUDIO_DATA_SUCCESS, payload : res.data })
   })
   .catch((error)=>{
      dispatch({type : SORT_AUDIO_DATA_FAILURE})
   })
}