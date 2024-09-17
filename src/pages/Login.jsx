import  { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/login.jpg';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate();

  const handleLogin=()=>{
    setIsLogin(true);
    navigate('/')
  }

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ title: '', fname: '', lname: '' ,email: '',password:''}); 
  };

  const [isRegistered, setIsRegistered] = useState(false);

  const [registerData, setRegisterData] = useState({
    title: 'Mr',
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Handle registration input change
  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios.post('https://bloghub-1cq5.onrender.com/authors', registerData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        toast.success('Registration successful!');
        setIsRegistered(true);
      })
      .catch((error) => {
        toast.error('Error registering. Please try again.');
      });
  };

 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('https://bloghub-1cq5.onrender.com/login', loginData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        toast.success('Login successful!');
      })
      .catch((error) => {
        toast.error('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center p-6"  style={{
      width: '100%',
      height: '700px',
      backgroundImage: `url(${logo})`,
      
    }} >
      <ToastContainer />
      
      <div className="w-full max-w-md  shadow-md rounded-lg p-8 opacity-80">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Register'}</h2>

       
        {!isLogin && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-cyan-700">Title:</label>
              <select 
                name="title" 
                value={registerData.title} 
                onChange={handleRegisterChange} 
                className="w-full p-2 border rounded"
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">First Name:</label>
              <input 
                type="text" 
                name="fname" 
                value={registerData.fname} 
                onChange={handleRegisterChange} 
                required 
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name:</label>
              <input 
                type="text" 
                name="lname" 
                value={registerData.lname} 
                onChange={handleRegisterChange} 
                required 
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={registerData.email} 
                onChange={handleRegisterChange} 
                required 
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <label className="block text-gray-700">Password:</label>
              <input 
                type="password" 
                name="password" 
                value={registerData.password} 
                onChange={handleRegisterChange} 
                required 
                className="w-full p-2 border rounded" 
              />
            </div>
            <button 
              type="submit"
              className="w-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >Signup 
            
            </button><br></br>
            <button onClick={toggleMode}>{isRegistered ? 'Create an account' : 'Already have an account? Login'}</button>
            {/* <div className="text-sm text-center text-gray-500">
            Already have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
              </div> */}
              
          </form>
        )}

      
        {isLogin && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-amber-700">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={loginData.email} 
                onChange={handleLoginChange} 
                required 
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <label className="block text-amber-700  ">Password:</label>
              <input 
                type="password" 
                name="password" 
                value={loginData.password} 
                onChange={handleLoginChange} 
                required 
                className="w-full p-2 border rounded" 
              />
            </div>
            <button onClick={handleLogin}
              type="submit" 
              className="w-20 bg-green-500 text-white p-2 rounded hover:bg-green-600">
                Login
              
            </button><br></br>
            <button onClick={toggleMode}>{isLogin ? 'Create an account' : 'Already have an account? Login'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
