import React from 'react'
import { Navigate, Outlet, Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  const {cmp}=props
  const navigate = useNavigate();
  
  useEffect(()=>{
    let login=localStorage.getItem('login');
    if (!login){
      navigate('/login')
    }
    
  })
  return (
<div>
  This is Private Route
  <cmp/>
</div>
  )
  // const isLoggedIn=window.localStorage.getItem("loggedIn");

  // return isLoggedIn==="true" ?<Outlet/> : <Navigate to={"/login"}/>
  // let loggedIn=true;

  // if (loggedIn) {
  //   return <Outlet/>
    
  // }else{
  //   return <Navigate to={"/login"}/>
  // }

    // const isAuthenticated = !!localStorage.getItem('authToken');
  // return (
  //   <div>
  // <h2>THis is my private route</h2>
  //     <Outlet/>
  //   </div>
  // )
}

export default PrivateRoute
