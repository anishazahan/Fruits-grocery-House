import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
  
      if(loading){
        return <button className="spinner-border mt-5 mx-auto">Loading..</button>
      }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace/>
    } 
    else {
      return children
    }
  };

export default RequireAuth