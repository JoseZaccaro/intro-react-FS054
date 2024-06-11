import React from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between px-4 py-2 items-center'>
      <Link to='/'><img src="https://fakeimg.pl/150x150/da5dfc/5c5c5c?text=Logo" alt="logo-app" className='w-12 h-12 rounded-full' /></Link>
      <Navigation />
    </header>
  )
}

export default Header