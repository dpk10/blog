import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/login.jpg';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Updated from useHistory to useNavigate

  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    if (username === 'email' && password === 'password') {
      localStorage.setItem('authToken', 'your-token');
      navigate('/dashboard');  
    } else {
      alert('Invalid credentials');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setRegisterData({ title: '', fname: '', lname: '', email: '', password: '' });
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
        navigate('/dashboard');  
      })
      .catch((error) => {
        toast.error('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center p-6" style={{
      width: '100%',
      height: '700px',
      backgroundImage: `url(${logo})`,
    }}>
      <ToastContainer />

      <div className="w-full max-w-md shadow-md rounded-lg p-8 opacity-80">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Register'}</h2>

        {!isLogin && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            {/* Registration form fields */}
            {/* ... */}
            <button type="submit" className="w-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Signup
            </button><br />
            <button onClick={toggleMode}>
              {isRegistered ? 'Create an account' : 'Already have an account? Login'}
            </button>
          </form>
        )}

        {isLogin && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Login form fields */}
            {/* ... */}
            <button type="submit" className="w-20 bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Login
            </button><br />
            <button onClick={toggleMode}>
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};



export default Login;
