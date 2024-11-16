// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom'

const Navbar = () => {
   const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  // const nav=useNavigate();

  // const handleclisk=()=>{
  //   nav("/blogform")
  // }
  return (
    
        
        <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> 
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
          <div className='text-white text-xl font-bold'> logo</div>
          <div className='hidden md:block'>
          <div className='ml-10 flex items-baseline space-x-4'>
          <NavLink className=''>
          <Link to="/">
       {/* <img src={logo} alt="logo" className="h-12 w-auto"/>  */}
         </Link> 
        {/* <div className='space-x-6'> */}
          {/* <link to="/">Home</link> */}
          {/* <Link to="/dashboard">Dashboard</Link> */}
           
            
          <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <Link to="/create_author">Create Author</Link></NavLink>
           
           <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <Link to="/updateblog">Update Blog</Link></NavLink>
            {/* <Link to="/blogform">Blog Form</Link> */}
            <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'><Link to="/blogs">Create Blog</Link> </NavLink> 
          
            {/* <Link to="/authorform">Author Form</Link> */}
          
          <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'><Link to="/bloglist">Blog List </Link> </NavLink>
          
          <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'><Link to="/edit_blog">Edit Blog</Link> </NavLink>
          <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <Link to="/login">Login</Link></NavLink>
            
          
          
          <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> <button onClick={logout}>Logout</button></NavLink>
          

          



    
        {/* </div> */}
        {/* <button className='bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600' onClick={handleclisk}>Blog Form</button> */}

          </NavLink>
          </div>
          </div>
          </div>

          <div className='flex md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'>
          <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                /> ):(
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          </div>
        </div>

       
      </div> 
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
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

          </NavLink>
          </div>
        </div>
      )}

      </nav>
  
    
  )
}

export default Navbar
