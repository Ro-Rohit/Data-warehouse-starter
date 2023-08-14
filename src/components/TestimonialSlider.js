import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

import { Autoplay, Pagination } from 'swiper';
import { testimonialsData } from '../data';




const TestimonialSlider = () => {
  return (
    <Swiper className='h-full w-full'
      pagination={{ clickable: true, }}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,

      }}
      modules={[Pagination, Autoplay]}
      centeredSlides={true} spaceBetween={20} slidesPerView={'auto'}>
      {testimonialsData.map((slide, index) => {
        const { image, name, web, message, delay } = slide
        return (
          <SwiperSlide
            key={index}
            className='bg-white border-accent-primary shadow-xl rounded-md max-h-[250px] max-w-[500px] mx-auto'
          >
            <div className='flex h-full gap-x-4 px-4 py-10 justify-center'>
              <div className='min-w-[70px] pt-2 overflow-hidden'>
                <img src={image} alt="img" className='w-full ' />
              </div>

              <div className='max-w-[350px] text-left'>
                <p className='text-lg text-primary font-bold '>{name}</p>
                <p className='mb-4 font-semibold text-accent-primary'>{web}</p>
                <p className='font-normal text-primary'>{message}</p>
              </div>

            </div>

          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
