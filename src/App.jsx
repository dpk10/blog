import react, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'
import AuthorForm from './components/AuthorForm'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateAuthor from './pages/CreateAuthor'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import Login from './pages/Login'
import Logout from './pages/Logout'
import PrivateRoute from './pages/PrivateRoute'
import Dashboard from './components/Dashboard'
import UpdateBlog from './pages/UpdateBlog'

function App() {
  const isLoggedIn=window.localStorage.getItem("loggedIn");
  const userType=window.localStorage.getItem("userType");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();
  // const [count, setCount] = useState(0)

  return (


    <>
  {/* <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS!</h1> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Router>
        <AuthProvider>
        <Navbar/>
       
       <Routes>
         
         {/* <Route path='login' element={<Login/>}/> */}
         {/* <Route path='logout' element={<Logout/>}/> */}
         <Route path="login" element={<Login/>} />
         <Route path='authorform' element={<AuthorForm/>}/>
         <Route path='blogform' element={<BlogForm/>}/>
         <Route path='bloglist' element={<BlogList/>}/>
         <Route path='create_author' element={<CreateAuthor/>}/>
         <Route path='blogs' element={<CreateBlog/>}/>
         <Route path='edit_blog' element={<EditBlog/>}/>
         <Route path='dashboard' element={<Dashboard/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='updateblog' element={<UpdateBlog/>}/>
       </Routes>
        </AuthProvider>
       
      </Router>
      
    </>
  )
}

export default App
