import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const RequireAuth = ({children}) => {

  const userData = useSelector((state)=>state.authReducer)


  if(userData.isAuth === false)
  {
    return <Navigate to="/login"/>
  }
  else{

    return children
    
  }
  
    
  
}

export default RequireAuth