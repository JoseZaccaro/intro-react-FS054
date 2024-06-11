import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Main = () => {
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Main