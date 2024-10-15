import image from '../assets/Cblog4.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const CreateBlog = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    body: '',
    authorId: '',
    tags: '',
    category: '',
    subcategory: '',
  });

  const handleSubmitChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();

    const blogPayload = {
      title: blogData.title,
      body: blogData.body,
      authorId: blogData.authorId,
      tags: blogData.tags.split(','),
      category: blogData.category,
      subcategory: blogData.subcategory.split(','),
    };

    axios.post('https://bloghub-1cq5.onrender.com/blogs', blogPayload, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        const token = response.data.token;
        console.log("Printing the token....", token);

        if (token) {
          localStorage.setItem("token", token);
          toast.success('Blog created successfully!');
        } else {
          toast.error('Blog creation failed!');
        }
        console.log("Response data:", response);
      })
      .catch((error) => {
        toast.error('Error creating blog. Please try again.');
        console.log("Error:", error);
      });
  };

  return (
    <div className='flex justify-center items-center h-screen'
      style={{
        width: '1216px',
        height: '800px',
        backgroundImage: `url(${image})`,
      }}>
      <ToastContainer />
      <div className="w-full max-w-lg shadow-lg rounded-lg p-1 border-x-10 opacity-75">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Create Blog Post</h2>

        <form onSubmit={handleBlogSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-cyan-700">Post Title</label>
            <input type="text" name="title" value={blogData.title} onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter post title" required />
          </div>

          <div>
            <label htmlFor="body" className="block text-sm font-medium text-cyan-700">Blog Content</label>
            <textarea name="body" value={blogData.body} onChange={handleSubmitChange} rows="8"
              className="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your blog content here" required></textarea>
          </div>

          <div>
            <label htmlFor="authorId" className="block text-sm font-medium text-cyan-700">Author ID</label>
            <input type="text" name="authorId" value={blogData.authorId} onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter author id"  />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-cyan-700">Tags</label>
            <input type="text" name="tags" value={blogData.tags} onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add tags separated by commas" />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-cyan-700">Category</label>
            <input type="text" name="category" value={blogData.category} onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add category" />
          </div>

          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-cyan-700">Sub Category</label>
            <input type="text" name="subcategory" value={blogData.subcategory} onChange={handleSubmitChange}
              className="mt-1 p-2 block w-full border border-gray-100 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Add subcategory separated by commas" />
          </div>

          <div className='flex justify-around'>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Create Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
