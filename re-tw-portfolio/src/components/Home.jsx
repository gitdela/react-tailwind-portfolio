import React from 'react';
// first import the image you'll use and give it a var name
import HeroImage from '../assets/HeroImage.jpeg';
// go to react icons, copy the icon, check the first two letters and use it in path
// for the name, open a curly bracket and paste it in there
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  const links = [
    {
      id: 1,
      child: <FaGithub size={20} />,
      href: 'https://github.com/gitdela',
      color: 'text-gray-200',
    },
    {
      id: 2,
      child: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/ken-nartey/',
      color: 'text-blue-400',
    },
    {
      id: 3,
      child: <FaTwitter size={20} />,
      href: 'https://twitter.com/thewebken',
      color: 'text-blue-500',
    },
    {
      id: 4,
      child: <FaMedium size={20} />,
      href: 'https://medium.com/@selftalkdeveloper',
    },
    {
      id: 5,
      child: <HiOutlineMail size={20} />,
      href: 'mailto:kendelanartey@gmail.com',
      color: 'text-red-400',
    },
  ];
  return (
    // the name attribute will be used for smooth scrolling
    <div
      name='home'
      className='w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 pt-5 pb-10 md:pt-0 md:pb-0 md:h-screen md:flex-row'>
        <div className='flex flex-col pt-10 space-y-4 justify-center h-full w-full md:space-y-0 md:pt-0 md:w-1/2'>
          <h2 className='text-3xl pt-10 font-bold text-white md:pt-0 md:text-5xl'>
            Hi, I'm Ken <br />
            <span className='text-2xl font-light'>Front-end Web Developer</span>
          </h2>
          <p className='text-white py-4 text-md md:text-xl'>
            I love exploring and creating stuff on the web. I am a lifelong
            learner and I'd love to work with you.
          </p>
          <div className='flex justify-center items-center lg:hidden'>
            <ul className='flex justify-start items-center mb-4 w-full'>
              {links.map(({ id, child, href, color }) => (
                <li
                  key={id}
                  className={`flex justify-between basis-11 items-center`}
                >
                  <a
                    href={href}
                    className={`flex justify-between items-center w-full text-white hover:scale-110 duration-200 ${color}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* notice we have a .group on the btn and the icon span tags */}
            {/* that is because the icon is a very small area that we want to rotate when we hover on the button and it will be hard to target*/}
            {/* so you put .group on the btn, and then add group- to the hover on the btn  */}
            {/* that way when you hover on the whole button, the icon detects it and rotate */}
            {/* at first it was a button but to connect the portfolio here to the portfolio section, i imported react scroll and changed the button to Link */}
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div className='hidden md:inline mt-24 md:mt-0 md:w-1/2'>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-xl mx-auto w-2/5 md:w-4/5'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
