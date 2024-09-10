import React from 'react'

const CreateBlog = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center h-screen'>
          <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-1 border-x-10 ">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Create Blog Post</h2>
    
    <form action="#" method="POST" class="space-y-6">
      
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Post Title</label>
        <input type="text" id="title" name="title" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter post title" required></input>
      </div>

      
      <div>
        <label for="author" class="block text-sm font-medium text-gray-700">Author Name</label>
        <input type="text" id="author" name="author" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter author name" required></input>
      </div>

      
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">Blog Content</label>
        <textarea id="content" name="content" rows="8" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your blog content here" required></textarea>
      </div>

      
      <div>
        <label for="tags" class="block text-sm font-medium text-gray-700">Tags</label>
        <input type="text" id="tags" name="tags" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add tags separated by commas"></input>
      </div>

      
      <div>
        <label for="image" class="block text-sm font-medium text-gray-700">Upload Image</label>
        <input type="file" id="image" name="image" class="mt-1 p-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100"></input>
      </div>

      <div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit Post</button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default CreateBlog
