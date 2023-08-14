import React from 'react';
import { navigationData } from '../data';

const NavMobile = ({ active, setActive }) => {
  return (
    <nav
      className={`${active ? 'flex flex-col' : 'hidden'} transition-all  px-6 py-8 h-full 
      w-full gap-y-4 bg-accent-tertiary`}
    >
      {navigationData.map((navItem, index) => {
        return <li key={index} className='list-none'>
          <a onClick={() => setActive(!active)} className='text-white font-secondary' href={navItem.href}>{navItem.name}</a>
        </li>
      })}
    </nav>
  );
};

export default NavMobile;
