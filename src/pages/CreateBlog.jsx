import React from 'react'
import image  from '../assets/Cblog4.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';



const CreateBlog = () => {
  
  const [blog, setblog] = useState(true);


  const [isBlog, isCreatetBlog]=useState(false);

  const [blogData, setBlogData]=useState({
    title: '',
    body:'',
    authorId: '',
    tags: '',
    category:'',
    subcategory: ''
  });

  const handleSubmitChange=(e)=>{
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,

    });

    const handleBlogSubmit=(e)=>{
      e.preventDefault();
      axios.post('https://bloghub-1cq5.onrender.com/blogs', blogData, {
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => {
          toast.success('Blog Created successfully!');
          isCreatetBlog(true);
        })
        .catch((error) => {
          toast.error('Error creating blog. Please try again.');
        });
    }
  }
  return (
    <div className=' flex justify-center items-center h-screen' style={{
      width: '1216px',
      height: '800px',
      backgroundImage: `url(${image})`,
      
    }}>
      <ToastContainer />
          <div class="w-full max-w-lg  shadow-lg rounded-lg p-1 border-x-10 opacity-75 ">
    <h2 class="text-3xl font-bold mb-6 text-center text-blue-800">Create Blog Post</h2>
 
    <form onSubmit={handleBlogSubmit} class="space-y-6">
      
      <div>
        <label for="title" class="block text-sm font-medium text-cyan-700">Post Title</label>
        <input type="text" id="title" name="title"
        value={blogData.title}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter post title" required></input>
      </div>

      
      <div>
        <label for="content" class="block text-sm font-medium text-cyan-700">Blog Content</label>
        <textarea id="content" name="content"
        value={blogData.body}
        onChange={handleSubmitChange}
         rows="8" class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your blog content here" required></textarea>
      </div>

      <div>
        <label for="author" class="block text-sm font-medium text-cyan-700">Author ID</label>
        <input type="text" id="author" name="author"
        value={blogData.authorId}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter author id" required></input>
      </div>

      
      <div>
        <label for="tags" class="block text-sm font-medium text-cyan-700">Tags</label>
        <input type="text" id="tags" name="tags"
        value={blogData.tags}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add tags separated by commas"></input>
      </div>

      
      <div>
        <label for="tags" class="block text-sm font-medium text-cyan-700">category</label>
        <input type="text" id="tags" name="tags"
        value={blogData.category}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add category separated by commas"></input>
      </div>

      <div>
        <label for="tags" class="block text-sm font-medium text-cyan-700">Sub category</label>
        <input type="text" id="tags" name="tags"
        value={blogData.subcategory}
        onChange={handleSubmitChange}
         class="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add sub category separated by commas"></input>
      </div>

      {/* <div>
        <label for="image" class="block text-sm font-medium text-cyan-700">Upload Image</label>
        <input type="file" id="image" name="image" class="mt-1 p-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-500 hover:file:bg-blue-100"></input>
      </div> */}

      <div>
        <button type="submit" class=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit Post</button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default CreateBlog
