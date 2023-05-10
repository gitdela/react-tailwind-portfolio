import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import bootstrap from '../assets/Bootstrap.png';

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-sky-400',
    },
    {
      id: 5,
      src: tailwind,
      title: 'TailwindCSS',
      style: 'shadow-sky-300',
    },
    {
      id: 6,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-600',
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
  ];
  return (
    <div
      name='skills'
      className='bg-gradient-to-b from-gray-800 to to-black w-full md:h-screen'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white text-start'>
        <div className='mt-10 pt-10 md:pt-0'>
          <p className='text-3xl md:text-4xl font-bold p-1 pl-0 inline'>
            Skills
          </p>
          <p className='py-6 text:md md:text-xl'>
            These are the technologies I've worked with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-0'>
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md md:hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt='' className='w-10 md:w-20 mx-auto' />
              <p className='mt-4 font-bold'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
