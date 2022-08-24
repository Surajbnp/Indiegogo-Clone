import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAudioProjectData } from '../Redux/AppReducer/actions'

const AudioPage = () => { 

   const audioData = useSelector((state)=>state.appReducer.audioProjects)
   const dispatch = useDispatch() 

   console.log(audioData)

   useEffect(()=>{
       if(audioData.length === 0 ){
           dispatch(getAudioProjectData())
       }
   },[dispatch, audioData.length])

  return (
    <div>AudioPage</div>
  )
}

export default AudioPage