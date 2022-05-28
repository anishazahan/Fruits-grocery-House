import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
  
      if(loading){
        return  <div className=" container mx-auto mt-5">
                <div className="spinner-border"></div>
        </div>
      }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace/>
    } 
    else {
      return children
    }
  };

export default RequireAuth