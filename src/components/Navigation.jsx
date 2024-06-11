import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const { loggedIn } = useSelector(store => store.authReducer)
    return (
        <nav className='flex gap-4 h-full items-center'>
            <Link to="/" className='hover:text-blue-300 active:text-blue-600'>Home</Link>
            {/* // TODO: Link a login solo debe mostrarse cuando el usuario este deslogueado  */}
            {!loggedIn && <Link to="/login" className='hover:text-blue-300 active:text-blue-600'>Login</Link>}
            <Dropdown />
        </nav>
    )
}

export default Navigation