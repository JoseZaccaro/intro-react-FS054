import React, { useState } from 'react'
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Dropdown = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const { loggedIn } = useSelector(store => store.authReducer)

  const handleClick = (e) => {
    loggedIn && setShow(!show)
  }
  const handleLogout = () => {
    dispatch(logout())
    setShow(!show)
  }
  // TODO: Solo debe mostrarse cuando el usuario este logueado 
  return (
    <div className="flex items-center justify-center">
      <div className="relative group">
        <button onClick={handleClick} id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          <Avatar />
        </button>
        <div id="dropdown-menu" style={{ display: show ? 'block' : 'none' }} className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
          <Link to={"/profile"} onClick={handleClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Profile</Link>
          <p onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Logout</p>
        </div>
      </div>

    </div>
  )
}

export default Dropdown