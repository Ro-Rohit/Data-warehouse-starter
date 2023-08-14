import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='max-h-fit  my-10 lg:px-[10%]'>
      <div data-aos='fade-up' data-aos-offset='300' className='container mx-auto h-[500px] rounded-2xl bg-accent-primary'>
        <div className='flex flex-col justify-center items-center h-full w-full '>
          <h2 className='h2 text-white text-center lg:text-left mb-[60px]'>Testimonials</h2>
          <div className='h-[300px] w-full'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
