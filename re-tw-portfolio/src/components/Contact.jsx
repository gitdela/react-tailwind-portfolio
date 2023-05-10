import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white md:h-screen'
    >
      <div className='flex flex-col max-w-screen-lg md:text-center justify-center mx-auto h-full'>
        <div className='pt-20 pb-4 md:pt-10'>
          {/* so the inline class makes it only underline the contact and nit the whole p container */}
          <p className='text-3xl font-bold inline p-1 pl-0 md:text-4xl'>
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
            className='flex flex-col w-full md:w-2/3 space-y-4'
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

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-4 mt-8 md:px-6 md:py-3 text-sm md:text-base mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
