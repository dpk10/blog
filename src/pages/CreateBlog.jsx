import image from '../assets/Cblog4.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getUserToken } from '../authUtils';
import { jwtDecode } from "jwt-decode";

const CreateBlog = () => {
  const token = getUserToken();
  const authorId = token ? jwtDecode(token).userId : null;

  const [blogData, setBlogData] = useState({
    title: '',
    body: '',
    category: '',
    tags: '',
    subcategory: '',
  });

  if (!token || !authorId) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500"
      >
        Please log in to create a blog
      </motion.div>
    );
  }

  const handleSubmitChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();

    const config = {
      method: 'post',
      url: 'https://bloghub-1cq5.onrender.com/blogs',
      headers: { 
        'Content-Type': 'application/json',
        'x-api-key': token
      },
      data: {
        title: blogData.title,
        body: blogData.body,
        category: blogData.category,
        authorId: authorId,
        tags: blogData.tags.split(',').map(tag => tag.trim()),
        subcategory: blogData.subcategory.split(',').map(sub => sub.trim()),
      }
    };

    try {
      const response = await axios(config);
      toast.success('Blog created successfully!');
      setBlogData({
        title: '',
        body: '',
        category: '',
        tags: '',
        subcategory: '',
      });
    } catch (error) {
      console.error('Error details:', error.response?.data);
      toast.error(error.response?.data?.msg || 'Failed to create blog. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <ToastContainer />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 backdrop-blur-sm bg-opacity-75">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Create Blog Post</h2>

        <form onSubmit={handleBlogSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-cyan-700">Post Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={blogData.title} 
              onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Enter post title" 
              required 
            />
          </div>

          <div>
            <label htmlFor="body" className="block text-sm font-medium text-cyan-700">Blog Content</label>
            <textarea 
              id="body" 
              name="body" 
              value={blogData.body} 
              onChange={handleSubmitChange} 
              rows="8"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Write your blog content here" 
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-cyan-700">Category</label>
            <input 
              type="text" 
              id="category" 
              name="category" 
              value={blogData.category} 
              onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Add category" 
              required 
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-cyan-700">Tags</label>
            <input 
              type="text" 
              id="tags" 
              name="tags" 
              value={blogData.tags} 
              onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Add tags separated by commas" 
            />
          </div>

          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-cyan-700">Sub Category</label>
            <input 
              type="text" 
              id="subcategory" 
              name="subcategory" 
              value={blogData.subcategory} 
              onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="Add subcategory separated by commas" 
            />
          </div>

          <div className='flex justify-center'>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;