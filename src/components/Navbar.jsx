// import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  // const nav=useNavigate();

  // const handleclisk=()=>{
  //   nav("/blogform")
  // }
  return (
  
      
      <nav className='bg-blue-300 p-10 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'> 

       <Link to="/">
       {/* <img src={logo} alt="logo" className="h-12 w-auto"/>  */}
         </Link> 
        {/* <div className='space-x-6'> */}
          {/* <link to="/">Home</link> */}
          <Link to="/authorform">Author Form</Link>
          <Link to="/blogform">Blog Form</Link>
          <Link to="/bloglist">Blog List </Link>
    
        {/* </div> */}
        {/* <button className='bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600' onClick={handleclisk}>Blog Form</button> */}

      </div> 

      </nav>
    
  )
}

export default Navbar
