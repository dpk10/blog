import React, { useState } from 'react'
import image  from '../assets/Cblog3.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const CreateAuthor = () => {
  const [auther, setAuther] = useState(true);
  const [isAuther, isCreateAuther]=useState(false);

  const [autherData, setAutherData]=useState({
    autherId: '',
    name:'',
    email: '',
    number: ''
  });

  const handleSubmitChange=(e)=>{
    console.log("error");
    setAutherData({
      ...autherData,
      [e.target.name]: e.target.value,
      
    });
  }

  const handleAutherSubmit = (e)=>{
    e.preventDefault();
    axios.post("https://bloghub-1cq5.onrender.com/authors", autherData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        console.log("printing the response.....", response)
        toast.success('Auther Created successfully!');
        isCreateAuther(true);
      })
      .catch((error) => {
        toast.error('Error creating Auther. Please try again.');
      });
  }

  return (
    <div className=' flex items-center justify-center h-screen' style={{
      width: '1216px',
      height: '700px',
      backgroundImage: `url(${image})`,
      
    }}>
      <ToastContainer />
        <div class="justify-items-center w-full max-w-md  shadow-md rounded-lg p-6 opacity-70">
    <h2 class=" bg-slate-400 text-2xl font-semibold mb-6 text-center">Create Author Form</h2>
    
    <form onSubmit={handleAutherSubmit} class="space-y-4">
      
    <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Auther ID</label>
        <input type="text"  name="autherId"
        value={autherData.autherId}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author ID" required></input>
      </div>

      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text"  name="name"
        value={autherData.name}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author Name" required></input>
      </div>

      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email"
        value={autherData.email}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Email Address" required></input>
      </div>

      <div>
        <label for="number" class="block text-sm font-medium text-gray-700">Number</label>
        <input type="number"  name="number"
        value={autherData.number}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author Number" required></input>
      </div>

      {/* <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="name" name="name" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your password" required></input>
      </div> */}

     
      {/* <div>
        <label for="biography" class="block text-sm font-medium text-gray-700">Biography</label>
        <textarea id="biography" name="biography" rows="4" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write a short biography"></textarea>
      </div> */}

      
      <div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">register</button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default CreateAuthor
