import React, { useState } from 'react';
import Logo from '../assets/img/logo.png'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import { BsArrowRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header
      data-aos='fade-down'
      data-aos-delay='1200'
      className='w-full shadow-md  lg:shadow-none relative pb-3 pt-6 z-30  px-4 md:px-0'
    >
      <div className='container mx-auto relative z-30 '>

        <div className='flex  justify-between items-center'>
          <div className='flex gap-x-[80px] items-center'>
            <a href="/"> <img src={Logo} alt="Logo" /></a>
            <div className='hidden md:flex'>
              <Nav />
            </div>
          </div>



          <button className='btn btn-quaternary group:'>
            <div className='flex items-center gap-x-3'>
              <p>Request demo</p>
              <BsArrowRight className='group-hover:text-white' />
            </div>
          </button>



          <div onClick={() => setActive(!active)} className='md:hidden text-2xl text-primary cursor-pointer' >
            <FaBars />
          </div>

          <div className={`${active ? 'max-h-52' : 'h-0'} 'rounded md:hidden font-bold 
          transition-all  bg-green-200 absolute  top-20 w-full left-0 right-0 '`}>
            <NavMobile active={active} setActive={setActive} />
          </div>


        </div>


      </div>

    </header>
  );
};

export default Header;
