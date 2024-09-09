import React from 'react'

const AuthorForm = () => {
  return (
    <div>
      {/* <h2 className='bg-slate-700'>Here regiter</h2> */}
      <h2 className='bg-stone-700 font-bold text-slate-900 text-2xl'>Author Registration Form</h2><br/>
        

        <div class="border-2 border-green-600 px-0 py-2 flex justify-center items-center p-4">
        <form class='border-2 border-width: 10px border-y-4 '>
            <div className='mb-2 flex items-center space-x-7 '>
                < label className='mr-5 ml-1'>Username</label> 
                <input className='border border-blue-700 placeholder-red-300' type='text' placeholder='enter username' ></input>
            </div>
        
            <div className='mb-2 space-x-7'>
               
            < label className='mr-5'>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='border border-blue-700 placeholder-red-300' type='email' placeholder='enter email' ></input>
            </div>
        
            <div className='mb-2 flex items-center space-x-9'>
            < label className='mr-5'>Password</label>
                <input className='border border-blue-700 placeholder-red-300' type='password' placeholder='enter password' ></input>
            </div>
            <div className='flex items-center space-x-0 '>
                <label className='mr-5'>Phone number</label>
                <input className=' border border-blue-700 placeholder-red-300' type='number' placeholder='enter your phone number'></input>
            </div><br/>
            <button type="submit" class="outline outline-offset-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default AuthorForm
