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
          <p className='text-3xl p-1 pl-0 font-bold inline border-b-2 md:border-b-4 border-gray-500 md:text-4xl'>
            About
          </p>
        </div>
        <p className='text-md md:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum odit
          repellat libero mollitia minus iusto optio provident quisquam vitae
          suscipit. Vel ducimus obcaecati voluptate pariatur ex rem dignissimos,
          magnam labore provident asperiores quidem quia totam tempora
          distinctio deleniti consequuntur quod eius earum voluptas
          necessitatibus nostrum. Dolores similique voluptas quo libero?
        </p>

        <br />

        <p className='text-md md:text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At soluta
          tempora mollitia modi aliquid, sapiente amet id, quae eveniet sed
          maiores autem libero exercitationem fugit dolorem? Aut natus magni vel
          necessitatibus omnis eaque molestiae nemo exercitationem dolores
          pariatur accusamus suscipit, atque quos qui, quidem delectus veniam ea
          voluptates, fugit fugiat?
        </p>
      </div>
    </div>
  );
};

export default About;
