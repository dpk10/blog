import React from 'react'
import { Navigate, Outlet, Route} from 'react-router-dom';

const PrivateRoute = () => {
  // const isLoggedIn=window.localStorage.getItem("loggedIn");

  // return isLoggedIn==="true" ?<Outlet/> : <Navigate to={"/login"}/>
  let loggedIn=true;

  if (loggedIn) {
    return <Outlet/>
    
  }else{
    return <Navigate to={"/login"}/>
  }

    // const isAuthenticated = !!localStorage.getItem('authToken');
  // return (
  //   <div>
  // <h2>THis is my private route</h2>
  //     <Outlet/>
  //   </div>
  // )
}

export default PrivateRoute
