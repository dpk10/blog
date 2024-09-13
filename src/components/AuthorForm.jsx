import React from 'react'
import { useNavigate } from 'react-router-dom'

// import {backgroundImage} from 'react'  
import logo from '../assets/blog3.jpg';

const AuthorForm = () => {

  const navigate=useNavigate()  
  
  const goback=()=>{
    navigate('/')
  }

  return (
    <body className='' >
      
       <div className=' flex items-center justify-center h-screen ' style={{
      width: '100%',
      height: '700px',
      backgroundImage: `url(${logo})`,
      
    }}>
      {/* <h2 className='bg-slate-700'>Here regiter</h2> */}
      {/* <h2 className='bg-stone-700 font-bold text-slate-900 text-2xl'>Author Registration Form</h2><br/> */}
        
      <div class="w-full max-w-md  shadow-md rounded-lg p-6 opacity-90">
    <h2 class="text-2xl font-semibold mb-6 text-center">Author Form</h2>
    
    <form class="space-y-4">
     
      <div>
        <label for="name" class="block text-sm font-medium text-cyan-800">Name</label>
        <input type="text" id="name" name="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author Name" required></input>
      </div>

      
      <div>
        <label for="email" class="block text-sm font-medium text-cyan-800">Email</label>
        <input type="email" id="email" name="email" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Email Address" required></input>
      </div>

      
      <div>
        <label for="biography" class="block text-sm font-medium text-cyan-800">Biography</label>
        <textarea id="biography" name="biography" rows="4" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write a short biography"></textarea>
      </div>

      
      <div>
      <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600" type="submit">Submit</button> &nbsp;
      <button className=' bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-500 focus:outline-none focus:ring-2' onClick={goback}>GO to Home</button>      </div>
    </form>
  </div>
    </div>
    </body>
   
  )
}

export default AuthorForm
