import React from 'react';

import { aboutData } from '../data';

const About = () => {
  const { image, title, subtitle } = aboutData;
  return (
    <section
      data-aos='fade-up'
      data-aos-offset='350'
      className='min-h-fit lg:px-[10%] mt-10'
    >
      <div className='container min-h-[500px] mx-auto'>
        <div className='flex flex-col h-full justify-center items-center gap-x-5 lg:flex-row bg-accent-secondary/[15%] rounded-xl'>

          <div className='flex-1 overflow-hidden max-w-xl'>
            <img data-aos='zoom-in-left' data-aos-delay='200' src={image} alt="w-full" />
          </div>

          <div className='flex-1 flex flex-col  items-center lg:items-start text-center lg:text-left'>
            <h1 data-aos='fade-up' data-aos-delay='300' className='h2 mb-6 lg:mb-12 lg:mr-10'>We are a high-level data storage bank</h1>
            <p data-aos='fade-up' data-aos-delay='400' className='lead mb-6 max-w-md'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, est quia facere architecto nostrum vitae tenetur
              fugit ipsa dolorum enim dolor conse quuntur nemo iure, nobis rerum!
              Alias perspiciatis consequuntur velit?
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
