import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'


const RequireAuth = ({children}) => {

  const userData = useSelector((state)=>state.authReducer)
  const location = useLocation()

  console.log("req", location)

  if(userData.isAuth === false)
  {
    return <Navigate to="/login" state={{ from : location}} replace/>
  }
  else{

    return children
    
  }
  
    
  
}

export default RequireAuth