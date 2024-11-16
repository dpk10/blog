import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
       
        localStorage.removeItem("token");

        navigate("/login");
    }, [navigate]);
 console.log("log out");
  return (
    <div>
          

    </div>
  )
}

export default Logout
