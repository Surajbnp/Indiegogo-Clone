
import { GET_AUDIO_PROJECT_DATA_FAILURE, 
    GET_AUDIO_PROJECT_DATA_SUCCESS, 
    GET_AUDIO_PROJECT_DATA_REQUEST      
    } from "./actionTypes"; 

const initState = {
    audioProjects : [],
    isLoading : false,
    isError : false
} 

export const appReducer = ( state = initState, { type, payload }) =>{

    switch (type){ 

        case GET_AUDIO_PROJECT_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case GET_AUDIO_PROJECT_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                audioProjects : payload
            }
        } 

        case GET_AUDIO_PROJECT_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        
        default : return state
    }
}