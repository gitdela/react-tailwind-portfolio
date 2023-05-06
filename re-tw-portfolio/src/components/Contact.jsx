import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col max-w-screen-lg mx-auto h-full'>
        <div className='pb-4 text-center'>
          {/* so the inline class makes it only underline the contact and nit the whole p container */}
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6 text-lg'>
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {/* first time i used the space class in this project */}
          <form
            action='https://getform.io/f/87827c03-e3c4-4fd9-8a72-bcd46aeac603'
            className='flex flex-col w-full md:w-1/2 space-y-8'
            method='POST'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent h-12 border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className='p-2 bg-transparent h-12 border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              id=''
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
