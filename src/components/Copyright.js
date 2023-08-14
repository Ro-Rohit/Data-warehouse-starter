import React from 'react';
import { copyrightData } from '../data';

const Copyright = () => {
  const { text, icon } = copyrightData
  return (
    <section className='h-fit lg:px-[10%] mb-20'>
      <div className='container mx-auto h-fit w-full'>
        <div className='flex flex-col lg:flex-row gap-y-4 lg:justify-between items-center'>
          <p className='lead max-w-md text-center lg:text-left w-full'>{text}</p>
          <div
            className='flex justify-center items-center w-[60px] h-[60px] text-2xl hover:text-3xl
           bg-accent-primary/10 text-accent-primary_hover p-2 cursor-pointer rounded-full order-first lg:order-last'
          >
            {icon}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Copyright;
