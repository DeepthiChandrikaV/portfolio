import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Deepthi Chandrika Veeramasuneni, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>My passion revolves around developing exceptional software that enhances the lives of those in my vicinity. I possess expertise in crafting software solutions catering to a diverse clientele, spanning from individuals and small businesses to major enterprise corporations. Imagine having a software expert readily accessible – I would embrace the opportunity to tap into their knowledge, seeking advice, and collaboratively exploring avenues to elevate the impact of my software development projects.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;