import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/Api';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaSpinner, FaUser, FaClock, FaTag } from 'react-icons/fa';

// import { useParams } from 'react-router-dom'

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await fetchBlogs(category);
        if (response && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          throw new Error("Response does not contain a valid data array");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllBlogs();
  }, [category]);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['Friends', 'Family', 'Work', 'Travel', 'Technology'];
  const getGradient = (index) => {
    const gradients = [
      'from-purple-400 to-pink-500',
      'from-blue-400 to-indigo-500',
      'from-green-400 to-teal-500',
      'from-yellow-400 to-orange-500',
      'from-red-400 to-pink-500',
      // 'from-white-400 to-black-500'
    ];
    return gradients[index % gradients.length];
  };

  // const { token } = useParams();

  return (
    <div>
      
      {/* <p>Your token is:{token}</p> */}
      <header class="bg-orange-400 text-white py-20 text-center">
    <h1 class="text-4xl font-bold">Welcome to My Blog</h1>
    <p className="mt-4 text-lg">Sharing knowledge, thoughts, and stories.</p>
  </header>

  
  <section class="container mx-auto px-4 py-5">
    <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">Latest Posts</h2>

    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
      {/* code paste */}


      {loading ? (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-primary-500" />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-2xl`}
                  whileHover={{ y: -5 }}
                >
                  <div className={`bg-gradient-to-br ${getGradient(index)} p-6 h-full flex flex-col justify-between`}>
                    <div>
                    <a href="#">
       <img class="rounded-t-lg" src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
   </a>

                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h2>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.body.substring(0, 100)}...</p>
                      <div className="flex flex-wrap items-center text-white text-opacity-80 mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <FaUser className="mr-2" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <FaClock className="mr-2" />
                          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                        </div>
                        {blog.category && (
                          <div className="flex items-center mb-2">
                            <FaTag className="mr-2" />
                            <span>{blog.category}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${blog._id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No blogs available.</p>
            )}
          </motion.div>
        </AnimatePresence>
      )}



    </div>
  </section> 

  
    </div>
  );
};

export default BlogList
