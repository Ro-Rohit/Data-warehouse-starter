import React from 'react';
import { navigationData } from '../data';

const Nav = () => {
  return (
    <nav className='flex items-center gap-x-6'>
      {navigationData.map((navItem, index) => {
        return <li key={index} className='a list-none'> <a href={navItem.href}>{navItem.name}</a></li>
      })}
    </nav>
  );
};

export default Nav;
