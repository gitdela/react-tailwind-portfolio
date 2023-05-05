import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/gitdela',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/ken-nartey/',
    },
    {
      id: 3,
      child: (
        <>
          Medium <FaMedium size={30} />
        </>
      ),
      href: 'https://medium.com/@selftalkdeveloper',
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: 'https://twitter.com/thewebken',
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:kendelanartey@gmail.com',
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/ken_nartey_cv.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];
  return (
    // this flex container is directing everything vertically
    <div className='hidden lg:flex flex-col fixed top-[30%] left-0'>
      <ul>
        {/* again, create one of the social links before you put it into a logic like this */}
        {/* when you destructure like below, don't forget to put it in curly brackets */}
        {links.map(({ id, child, href, style, download }) => (
          /* this li container will hold the social media name and arrow icon  */
          /* it's made a flex container to position them in the center of the w-40 container */
          /* the whole li is a clickable link */
          /* the negative margin is a trial and error till it hides enough on md screen */
          <li
            key={id}
            // here's where template literals came in to help your boy in adding the var style
            className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 md:ml-[-100px] hover:ml-[-5px] font-bold hover:rounded-md duration-300 ${style}`}
          >
            {/* both the name and icon need to be in a row, that's why the flex
            container  */}
            {/* in order not to intro another div in DOM, we grouped them with a
            fragment */}

            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
