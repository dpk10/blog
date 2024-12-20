import React from 'react'
import logo  from '../assets/Eblog.jpg';

const EditBlog = () => {

  
  return (
    <div>
      <div className='bg-gray-100 flex justify-center items-center h-screen' style={{
      width: '1216px',
      height: '700px',
      backgroundImage: `url(${logo})`,
      
    }}>
          <div class="w-full max-w-lg  shadow-lg rounded-lg p-5 border-x-10 opacity-70">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Edit Blog Post</h2>
    
    <form class="space-y-6">
      
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Blog Title</label>
        <input type="text" id="title" name="title" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter blog title" required></input>
      </div>
      
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">Blog Content</label>
        <textarea id="content" name="content" rows="8" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your blog content here" required></textarea>
      </div>

      <div>
        <label for="author" class="block text-sm font-medium text-gray-700">Tags</label>
        <input type="text" id="author" name="author" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter tags" required></input>
      </div>

      <div>
        <label for="author" class="block text-sm font-medium text-gray-700">Category</label>
        <input type="text" id="author" name="author" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter category" required></input>
      </div>

      <div>
        <label for="author" class="block text-sm font-medium text-gray-700">Sub Category</label>
        <input type="text" id="author" name="author" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter sub category" required></input>
      </div>

      <div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Update Blog</button>
      </div>
    </form>
  </div>
    </div>
    </div>
  )
}

export default EditBlog
