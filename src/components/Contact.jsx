import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[50%] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex flex-col w-full md:w-1/2'>
            <input className='bg-[#ccd6f6] p-1 mb-4' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] p-1' type="email" placeholder='Email' name='email' />
          </div>
          <div className='flex flex-col w-full md:w-1/2'>
            <textarea className='bg-[#ccd6f6] p-1' name="message" rows="3" placeholder='Message'></textarea>
          </div>
        </div>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )  
}

export default Contact