import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogForm = () => {
  const navigate=useNavigate()

  const goback=()=>{
    navigate(-1)
  }

  return (
    <div className='bg-gray-100 flex items-center justify-center h-screen'>
     <div class="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-6">Create a Blog</h2>
        <form>
            
            <div class="mb-4">
                <label class="block text-gray-700 font-medium mb-2" for="title">Blog Title</label>
                <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="title" name="title" placeholder="Enter the title of your blog" required></input>
            </div>

            
            <div class="mb-4">
                <label class="block text-gray-700 font-medium mb-2" for="content">Content</label>
                <textarea class="w-full px-4 py-2 border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="content" name="content" placeholder="Write your blog content" required></textarea>
            </div>

            
            <div class="mb-4">
                <label class="block text-gray-700 font-medium mb-2" for="author">Author</label>
                <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="author" name="author" placeholder="Author name" required></input>
            </div>

            
            <div class="text-center flex-auto">
                <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600" type="submit">Publish Blog</button>
                <button className=' bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-500 focus:outline-none focus:ring-2' onClick={goback}>GO to Home</button>
            </div>
        </form>
    </div>
    <div>
      
    </div>

    </div>
  )
}

export default BlogForm
