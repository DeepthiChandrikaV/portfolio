import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import img from "../assets/projects/hello-there-private-from-penguins-of-madagascar.gif"

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex'>
      <div className='max-w-[1000px] mx-auto px-8 flex'>
        {/* Text Content */}
        <div className='flex flex-col justify-center'>
          <div>
            <p className='text-[#FD1C03]'>My self</p>
            <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>
              Deepthi Chandrika
            </h1>
            <h2 className='text-4xl sm:text-3xl font-bold text-white'>
              I'm a Software Engineer.
            </h2>
            <p className='text-white py-4 max-w-[700px]'>
            I am a Software Engineer with expertise in crafting outstanding digital experiences, primarily centered around the development of responsive full-stack web applications, and occasionally delving into design aspects.
            </p>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='flex items-center'>
          <img src={img} alt="img" className='w-640 h-360 rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;
