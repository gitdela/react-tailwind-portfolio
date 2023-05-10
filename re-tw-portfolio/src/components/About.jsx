import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'
    >
      {/* max-w-screen-lg is just setting the max-width to the size of a lg screen */}
      {/* size of a large screen in tailwind is about 1024px so max-width: 1024px */}
      {/* w-full and h-full because the prev div is what we set to the screen size  */}
      <div className='max-w-screen-lg px-4 py-20 mx-auto flex flex-col justify-center w-full md:p-4 md:h-full'>
        <div className='pb-8'>
          <p className='text-3xl p-1 pl-0 font-bold inline md:text-4xl'>
            About
          </p>
        </div>
        <p className='text-md md:text-xl'>
          A web developer with a passion for creating beautiful, user-friendly
          websites. I worked in sales for a few years before deciding to pursue
          my dream of becoming a software engineer. I taught myself HTML, CSS,
          JavaScript, Bootstrap, TailwindCSS and React.
        </p>

        <br />

        <p className='text-md md:text-xl'>
          In my free time, I enjoy exploring new technologies and tinkering with
          personal projects. I'm a strong believer in the power of lifelong
          learning and am always looking for ways to improve my skills and stay
          up-to-date with the latest trends in web development. I'm excited to
          connect with other professionals in the industry and explore
          opportunities to use my skills to make a positive impact. Let's chat!
        </p>
      </div>
    </div>
  );
};

export default About;
