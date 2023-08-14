import React from 'react';
import { featuresData } from '../data';
import { BsArrowRight } from 'react-icons/bs';

const Features = () => {
  const { title, subtitle, list } = featuresData;

  return (
    <section className='min-h-fit my-20'>
      <div className='container mx-auto h-full'>

        {/* text  */}
        <div className='text-center mb-10'>
          <h2 data-aos='fade-down' data-aos-delay='300' className='h2 mb-8'>{title}</h2>
          <p data-aos='fade-down' data-aos-delay='400' className='lead mb-8 max-w-[450px] mx-auto'>
            {subtitle}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px] '>
          {list.map((feature, index) => {
            const { image, bgImage, title, description, linkText, delay } = feature;
            return (
              <div
                data-aos='zoom-in'
                data-aos-delay={delay}
                key={index}
                className='max-w-[530px] h-[358px] mx-auto'
              >
                <div className='w-full h-full flex lg:flex-row items-center justify-center lg:justify-start mx-auto flex-col gap-x-4 relative'>

                  {/* bg img  */}
                  <div className='hidden lg:flex absolute top-0 right-0 -z-10'>
                    <img src={bgImage} alt="bgImg" />
                  </div>

                  <div className='max-h-[120px] overflow-hidden'>
                    <img data-aos='zoom-in-right' data-aos-delay={delay} src={image} alt="image" />
                  </div>

                  {/* info  */}
                  <div className='max-w-[220px]'>
                    <h3 className='h3 mb-2'>{title}</h3>
                    <p className='font-light italic mb-2'>{description}</p>
                    <div className='flex items-center gap-x-2 group'>
                      <a className='text-primary font-bold' href="#">{linkText}</a>
                      <BsArrowRight className='text-xl text-accent-primary group-hover:pl-[5px]' />
                    </div>

                  </div>


                </div>

              </div>
            )
          })}

        </div>


      </div>
    </section>
  );
};

export default Features;
