import React from 'react';
import eCommerce from '../assets/portfolio/e-commerce.jpg';
import manage from '../assets/portfolio/manage.jpg';
import portfolio from '../assets/portfolio/portfolio.jpg';

const Portfolio = () => {
  function runLinks(link) {
    window.open(link, '_blank');
  }

  const portfolios = [
    {
      id: 1,
      portName: 'HTML CSS JS eCommerce',
      src: eCommerce,
      link: 'https://gitdela.github.io/e-commerce-pf/',
      code: 'https://github.com/gitdela/e-commerce-pf',
    },
    {
      id: 2,
      portName: 'TailwindCSS Landing Page',
      src: manage,
      link: 'https://gitdela.github.io/tailwind-landing-page/',
      code: 'https://github.com/gitdela/tailwind-landing-page',
    },
    {
      id: 3,
      portName: 'React TailwindCSS Portfolio',
      src: portfolio,
    },
  ];
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6 text-xl'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, portName, src, link, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div>
                <p className='m-2 p-2 text-center font-bold'>{portName}</p>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  onClick={() => runLinks(link)}
                  className='w-1/2 px-4 py-2 m-3 duration-200 hover:scale-105'
                >
                  Demo
                </button>
                <button
                  className='w-1/2 px-4 py-2 m-3 duration-200 hover:scale-105'
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
