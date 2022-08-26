
import { GET_AUDIO_PROJECT_DATA_FAILURE, 
    GET_AUDIO_PROJECT_DATA_SUCCESS, 
    GET_AUDIO_PROJECT_DATA_REQUEST, 
    FILTER_AUDIO_PROJECT_DATA_FAILURE,
    FILTER_AUDIO_PROJECT_DATA_REQUEST,
    FILTER_AUDIO_PROJECT_DATA_SUCCESS, 
    SORT_AUDIO_DATA_FAILURE,
    SORT_AUDIO_DATA_REQUEST, 
    SORT_AUDIO_DATA_SUCCESS    
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

        case FILTER_AUDIO_PROJECT_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case FILTER_AUDIO_PROJECT_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                audioProjects : payload
            }
        } 

        case FILTER_AUDIO_PROJECT_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        } 

        case SORT_AUDIO_DATA_REQUEST :{
            return {
                ...state,
                isLoading : true
            }
        } 

        case SORT_AUDIO_DATA_SUCCESS :{
            return {
                ...state,
                isLoading : false,
                audioProjects : payload
            }
        } 

        case SORT_AUDIO_DATA_FAILURE :{
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        
        default : return state
    }
}