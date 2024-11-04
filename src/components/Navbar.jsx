// import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  // const nav=useNavigate();

  // const handleclisk=()=>{
  //   nav("/blogform")
  // }
  return (
  
      
      <nav className='bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto'>
        <div className='md:h-12 w-auto mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap'> 

       <Link to="/">
       {/* <img src={logo} alt="logo" className="h-12 w-auto"/>  */}
         </Link> 
        {/* <div className='space-x-6'> */}
          {/* <link to="/">Home</link> */}
          {/* <Link to="/dashboard">Dashboard</Link> */}
          
            
          
            <Link to="/create_author">Create Author</Link>
            <Link to="/updateblog">Update Blog</Link>
            {/* <Link to="/blogform">Blog Form</Link> */}
            <Link to="/blogs">Create Blog</Link>  
          
            {/* <Link to="/authorform">Author Form</Link> */}
          
          <Link to="/bloglist">Blog List </Link>
          
          <Link to="/edit_blog">Edit Blog</Link>
          <Link to="/login">Login</Link>
            
          
          
          <Link to="/logout">Logout</Link>
          

          



    
        {/* </div> */}
        {/* <button className='bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600' onClick={handleclisk}>Blog Form</button> */}

      </div> 

      </nav>
    
  )
}

export default Navbar
