import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between w-11/12 mx-auto mt-6'>
      <div>
        <h2 className='text-2xl font-bold'>COFFEE_BOOK</h2>
      </div>
      {/* className={({ isActive }) => `text-2xl mb-9 tab ${isActive ? 'tab-active' : ''}`} */}
      <div >
        <NavLink className={({ isActive }) => `mr-4 text-xl ${isActive ? 'text-yellow-300' : ''}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `mr-4 text-xl ${isActive ? 'text-yellow-300' : ''}`} to='/Coffees'>Coffees</NavLink>
        <NavLink className={({ isActive }) => `mr-4 text-xl ${isActive ? 'text-yellow-300' : ''}`} to='/DashBoard'>DashBoard</NavLink>
      </div>

    </div>

  );
};

export default Navbar;