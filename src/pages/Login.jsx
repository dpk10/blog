import React from 'react'

const Login = () => {
  return (

    <div className='bg-gray-100 flex items-center justify-center h-screen'>
    
  <div class="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
    
    <form  class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your email" required></input>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your password" required></input>
      </div>

      <div class="flex items-center">
        <input type="checkbox" id="remember_me" name="remember_me" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"></input>
        <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>

      <div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
      </div>
    </form>

    
    <div class="mt-4 flex justify-between text-sm">
      <a href="#" class="text-blue-500 hover:underline">Forgot your password?</a>
      <a href="#" class="text-blue-500 hover:underline">Sign up</a>
    </div>
  </div>
    </div>
  )
}

export default Login
