import axios from 'axios';
import { getUserToken } from '../authUtils';

const API_BASE_URL = 'https://bloghub-1cq5.onrender.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    maxBodyLength: Infinity,
});

// Function to handle errors
const handleError = (error) => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
};

// Function to set the authentication token in the request headers
const setAuthHeader = (config) => {
    const token = getUserToken();
    if (token) {
        config.headers['x-api-key'] = token;
        console.log('Setting x-api-key header:', config.headers['x-api-key']);

    } else {
        console.log('No token found in localStorage');
    }
    return config;
};

// Add a request interceptor to include the token in all requests
api.interceptors.request.use(setAuthHeader, (error) => Promise.reject(error));

// Register author
export const registerAuthor = async (authorData) => {
    try {
        const response = await api.post('/authors', authorData);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Login author
export const loginAuthor = async (loginData) => {
    try {
      const response = await api.post('/login', loginData);
      console.log('Login response:', response.data);
      const userData = {
        ...response.data,
        userId: response.data.userId || response.data._id // Adjust based on your API response
      };
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User data stored in localStorage');
      return userData;
    } catch (error) {
      handleError(error);
    }
};
// Create a new blog
export const createBlog = async (blogData) => {
    try {
        console.log('Attempting to create blog with data:', blogData);
        const response = await api.post('/blogs', blogData);
        console.log('Create blog response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Detailed error in createBlog:', error.response?.data || error.message);
        handleError(error);
    }
};

// Fetch blogs
export const fetchBlogs = async (authorId = null) => {
    try {
        const url = authorId ? `/blogs?authorId=${authorId}` : '/blogs';
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getBlog = async (blogId) => {
    try {
        const response = await api.get(`/blogs/${blogId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const updateBlog = async (blogId, blogData) => {
    try {
        const response = await api.put(`/blogs/${blogId}`, blogData);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const deleteBlog = async (blogId) => {
    try {
        const response = await api.delete(`/blogs/${blogId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getUserBlogs = async (userId) => {
  try {
    const response = await api.get(`/blogs?authorId=${userId}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
