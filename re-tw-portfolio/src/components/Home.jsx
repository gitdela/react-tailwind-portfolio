import React from 'react';
// first import the image you'll use and give it a var name
import HeroImage from '../assets/HeroImage.jpeg';
// go to react icons, copy the icon, check the first two letters and use it in path
// for the name, open a curly bracket and paste it in there
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    // the name attribute will be used for smooth scrolling
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full w-full md:w-1/2'>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            I am a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4'>
            I am a self taught front end developer of 2 years. I have been
            coding for Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At, deleniti odio deserunt officia minus consequuntur.
          </p>
          <div>
            {/* notice we have a .group on the btn and the icon span tags */}
            {/* that is because the icon is a very small area that we want to rotate when we hover on the button and it will be hard to target*/}
            {/* so you put .group on the btn, and then add group- to the hover on the btn  */}
            {/* that way when you hover on the whole button, the icon detects it and rotate */}
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-full md:w-4/5'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
