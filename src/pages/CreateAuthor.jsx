import React from 'react'

const CreateAuthor = () => {
  return (
    <div className='bg-gray-200 flex items-center justify-center h-screen'>
        <div class="justify-items-center w-full max-w-md bg-white shadow-md rounded-lg p-6">
    <h2 class=" bg-slate-400 text-2xl font-semibold mb-6 text-center">Create Author Form</h2>
    
    <form class="space-y-4">
      
    <div>
        <label for="name" class="block text-sm font-medium text-gray-700">User ID</label>
        <input type="text" id="name" name="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author ID" required></input>
      </div>

      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author Name" required></input>
      </div>

      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Email Address" required></input>
      </div>

      <div>
        <label for="number" class="block text-sm font-medium text-gray-700">Number</label>
        <input type="number" id="name" name="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Author Number" required></input>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="name" name="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your password" required></input>
      </div>

     
      {/* <div>
        <label for="biography" class="block text-sm font-medium text-gray-700">Biography</label>
        <textarea id="biography" name="biography" rows="4" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write a short biography"></textarea>
      </div> */}

      
      <div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default CreateAuthor
