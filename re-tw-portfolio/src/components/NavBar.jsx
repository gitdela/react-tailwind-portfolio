import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import BrandName from '../assets/logo.png';
import { Link, link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    // this is the navbar component. the div is returning the navbar
    // that's why on the main div, we treated it like a container
    <div className='bg-black flex justify-between items-center w-full px-4 h-20 text-gray-500 fixed'>
      {/* first element here is the logo wrapped in h1 */}
      {/* you can choose to make it an image */}
      <img src={BrandName} className='h-2/5 md:h-1/2' alt='' />
      {/* <h1 className='text-4xl text-white font-bold ml-2'>
        <span className='text-red-600'>KEN</span>NARTEY
      </h1> */}

      {/* second element is the navigation ul */}
      {/* this ul hides or display flex depending on the screen size */}
      <ul className='hidden md:flex'>
        {/* instead of map((your var name)), destructure it here and use the individual vars */}
        {/* so instead of referencing it as link.id or link.link, you can use the indi names */}
        {/* makes our code cleaner */}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-bold text-lg text-gray-500 hover:scale-105 duration-200'
          >
            {/* it was just {link} but because of react-scroll i put it in a <Link> tag */}
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* the third element here is the collapse toggle button */}
      {/* this button shows up on small screens when the ul navigation is hidden */}
      {/* the nav button starts off as true as set in the useState() so the fabars are shown */}
      {/* but the moment it's clicked, the setNav function on the div toggles it to false */}
      {/* remember this is just a UI/UX button to show that the nav is closed or open */}
      {/* it does not really open up/come up with the mobile ul nav list */}
      {/* so after this we create the mobile ul nav list match it to this icon to improve UX */}
      {/* side note is you can use the z-? class without setting a position property on it */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 text-gray-700 md:hidden z-10'
      >
        {/* when it's false, this tenary operator displays the X icon */}
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* i actually created the ul element first before i pushed it into the logic */}
      {/* the toggle starts off being true when the page loads. meaning it's a bar */}
      {/* when it is clicked, it becomes a X. meaning it's not true (!nav) */}
      {/* and that is when we want the ul to display. hence the logic below */}
      {/* note that we didn't have to put a sm/md display property on the mobile ul */}
      {/* because it's availability is dependant on the toggle button */}
      {/* which is only available on sm screens anyway */}

      {!nav && (
        // the fourth element is the mobile navigation
        //it hides on md screens but it's available to toggle on sm screens
        //with the help of the UI/UX collapse toggle button
        // the logic here is the same for the big screen ul nav list except for the classes
        // create one static li element and style it your way
        // then copy the li logic from the big screen nav list but swap the li classes
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer font-bold capitalize py-6 text-3xl'
            >
              {/* it was just {link} but because of react-scroll i put it in a <Link> tag */}
              {/* with the link, it needs a 'to' to know where it is going */}
              {/* that's why we put 'name' on the sections */}
              {/* and using the small letter for links make it easy to use it for links here too */}
              {/* killing two birds with one stone */}
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
