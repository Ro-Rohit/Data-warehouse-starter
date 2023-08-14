import React from 'react';

import { ctaData } from '../data';
import { BsArrowRight } from 'react-icons/bs';


const CtaSection = () => {
  const { title, subtitle, btnText1, btnText2 } = ctaData;
  return (
    <section data-aos='fade-up' className='my-[8%] h-fit w-full  lg:px-[10%] border-t-2'>
      <div className='container mx-auto py-[4em] h-fit'>
        <div className='flex flex-col lg:flex-row gap-y-10 lg:justify-between items-center'>
          <div className='text-center lg:text-left'>
            <h2 data-aos='fade-up' data-aos-delay='300' className='h2 mb-2'>{title}</h2>
            <p data-aos='fade-up' className='lead font-normal'>{subtitle}</p>
          </div>

          <div className='flex  flex-col lg:flex-row lg:gap-x-6 gap-y-4 items-center'>
            <button data-aos='fade-up' data-aos-delay='300' className='btn btn-secondary w-[200px]'>{btnText1}</button>
            <button data-aos='fade-up' data-aos-delay='400' className='btn btn-quaternary group flex gap-x-2 items-center'>
              <div>{btnText2}</div>
              <BsArrowRight className='text-xl transition text-accent-primary group-hover:text-white ' />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CtaSection;
