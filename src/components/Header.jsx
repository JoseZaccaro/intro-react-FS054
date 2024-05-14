import React from 'react'
import Anchor from './Anchor';

const Header = () => {
    const links = [
        {texto: 'Home', href: '#'},
        {texto: 'About', href: '#'},
        {texto: 'Contact', href: '#'},
    ]
    return (
        <header className='w-full p-4 bg-gray-400'>
            <nav className='flex gap-4 w-full justify-end'>
                {links.map((link, i) => (
                    <Anchor key={i} texto={link.texto} href={link.href}/>
                ))}
            </nav>
        </header>
    )
}

export default Header