import React from 'react';
import { footerData } from '../data';


const Footer = () => {
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer className='lg:px-[10%] w-full max-h-fit my-[10%]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row gap-y-6 gap-x-4'>

          {/* info */}
          <div className='max-w-md lg:w-full mx-auto lg:mx-0 text-center lg:text-left'>
            {/* logo  */}
            <a href="/"><img src={logo} alt="logo" className=' mx-auto lg:mx-0' /></a>
            <div className='lead text-primary font-secondary max-w-[300px] mt-8 mb-2'>{address}</div>
            <div className='lead italic font-light'>{email}</div>
            <div className='lead italic font-light'>{phone}</div>
          </div>

          {/* list  */}
          <div className='flex-1 flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-y-10 '>

            {/* list1  */}
            <div>
              <div className='font-extrabold lg:mb-8 mb-5 text-primary'>About</div>
              <div className='font-medium space-y-3 '>
                {list1.map((item, index) => {
                  return (
                    <li key={index} className='flex flex-col list-none'><a href={item.href}>{item.name}</a></li>
                  )
                })}
              </div>
            </div>



            {/* list 2 */}
            <div>
              <div className='font-extrabold lg:mb-8 mb-5 text-primary'>Help</div>
              <div className='font-medium space-y-3'>
                {list2.map((item, index) => {
                  return (
                    <li key={index} className='flex flex-col list-none'><a href={item.href}>{item.name}</a></li>
                  )
                })}
              </div>
            </div>


            <div className='text-center'>
              <div className='font-extrabold lg:mb-8 mb-5 text-primary'>Social Media</div>
              <div className='flex items-center justify-center gap-x-3'>
                {socialList.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='flex  justify-center items-center w-12 h-12 rounded-full p-1
                       bg-primary/10 cursor-pointer list-none hover:bg-accent-secondary transition-all'
                    >
                      <a href={item.href}>{item.icon}</a>
                    </li>
                  )
                })}
              </div>
            </div>

          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
