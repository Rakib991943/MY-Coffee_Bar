import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between w-11/12 mx-auto mt-6'>
      <div>
        <h2 className='text-2xl font-bold'>COFFEE_BOOK</h2>
      </div>
      <div >
        <NavLink className='mr-5' to='/'>Home</NavLink>
        <NavLink className='mr-5' to='/Coffees'>Coffees</NavLink>
        <NavLink className='mr-5' to='/DashBoard'>DashBoard</NavLink>
      </div>

    </div>

  );
};

export default Navbar;