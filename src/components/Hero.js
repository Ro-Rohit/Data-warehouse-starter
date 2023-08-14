import React from 'react';

import { heroData } from '../data'
import Header from './Header';

const Hero = () => {
  const { title, subtitle, btnText, image: HeroImg } = heroData
  return (
    <section className='lg:min-h-[600px]  lg:px-[10%]'>
      <Header />

      <div className='container min-h-[480px] h-full  mx-auto relative'>

        <div className='flex lg:flex-row items-center flex-col  h-full pt-4 lg:pt-0  '>

          {/* text  */}
          <div className='flex flex-col  items-center lg:items-start lg:text-left text-center'>
            <h1 data-aos='fade-down' data-aos-delay='400' className='h1 max-w-xl  mb-6 lg:mb-8 '>{title}</h1>
            <p data-aos='fade-down' data-aos-delay='500' className='lead max-w-md  lg:mb-8 mb-4'>{subtitle}</p>
            <button data-aos='fade-down' data-aos-delay='600' className='btn btn-primary mb-8 lg:mb-0 max-w-[160px] '>{btnText}</button>
          </div>


          {/* img  */}
          <div className='max-w-xl lg:absolute lg:right-2 lg:bottom-10 overflow-hidden'>
            <img data-aos='fade-up' data-aos-delay='700' src={HeroImg} alt="img" className='w-full' />
          </div>


        </div>

      </div>

    </section>
  );
};

export default Hero;
