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

}

export default PrivateRoute
