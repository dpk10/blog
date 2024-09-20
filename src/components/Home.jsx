// import React from 'react'
import { useNavigate } from "react-router-dom";
// import AuthorForm from "./AuthorForm";
// import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

const Home = () => {
    // const navigate=useNavigate();
    // const handleclisk=()=>{
    //     navigate('/blogform')
    // }
  return (
    <div>
        {/* <h2>Hello there..</h2> */}
      {/* <AuthorForm/> */}
      {/* <BlogForm/> */}
      <BlogList/>
      {/* <button onClick={handleclisk}>Go to page</button> */}
    </div>
  )
}

export default Home
