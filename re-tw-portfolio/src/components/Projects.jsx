import React from 'react';
import eCommerce from '../assets/portfolio/e-commerce.jpg';
import manage from '../assets/portfolio/manage.jpg';
import teams from '../assets/portfolio/team-working.jpg';

const Portfolio = () => {
  function runLinks(link) {
    window.open(link, '_blank');
  }

  const portfolios = [
    {
      id: 1,
      portName: 'Team Member Allocation App',
      src: teams,
      link: 'https://gitdela.github.io/team-member-allocation/',
      code: 'https://github.com/gitdela/team-member-allocation',
    },
    {
      id: 2,
      portName: 'HTML CSS JS eCommerce',
      src: eCommerce,
      link: 'https://gitdela.github.io/e-commerce-pf/',
      code: 'https://github.com/gitdela/e-commerce-pf',
    },
    {
      id: 3,
      portName: 'TailwindCSS Landing Page',
      src: manage,
      link: 'https://gitdela.github.io/tailwind-landing-page/',
      code: 'https://github.com/gitdela/tailwind-landing-page',
    },
  ];
  return (
    <div
      name='projects'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg px-4 pb-12 mx-auto flex flex-col justify-center w-full h-full md:pb-0'>
        <div className='pt-20 pb-8'>
          <p className='text-3xl font-bold inline p-1 pl-0 md:text-4xl'>
            Projects
          </p>
          <p className='py-6 text-md md:text-xl'>
            Check out some of my work right here. Click on{' '}
            <span className='text-cyan-600'>Code</span> to read about the
            project under <span className='text-cyan-600'>README.md</span> and
            go through the code. Or <span className='text-cyan-600'>Demo</span>,
            to go to the live website.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 space-y-4 sm:px-0'>
          {portfolios.map(({ id, portName, src, link, code }) => (
            <div
              key={id}
              className='shadow-md shadow-gray-600 rounded-md md:rounded-lg'
            >
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 lg:hover:scale-105'
              />
              <div>
                <p className='m-1 pt-2 md:m-2 md:p-2 text-center font-bold'>
                  {portName}
                </p>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  onClick={() => runLinks(link)}
                  className='w-1/2 px-2 py-1 m-1 md:px-4 md:py-2 md:m-3 duration-200 hover:scale-105'
                >
                  Demo
                </button>
                <button
                  className='w-1/2 px-2 py-1 m-1 md:px-4 md:py-2 md:m-3 duration-200 hover:scale-105'
                  onClick={() => runLinks(code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
