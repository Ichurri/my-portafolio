import React, { useState } from 'react';
import './NavBar.css';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        const body = document.querySelector('body');
        if (menuOpen) body.classList.remove('no-scroll');
        else body.classList.add('no-scroll');
    };

    const closeMenu = () => {
        setMenuOpen(false);
        const body = document.querySelector('body');
        body.classList.remove('no-scroll');
    };

    return (
        <>
            <div className='animate__animated animate__animated animate__heartBeat'>
                <nav>
                    <div className="hamburger" onClick={ toggleMenu }>
                        <span className={ menuOpen ? 'active' : '' }></span>
                        <span className={ menuOpen ? 'active' : '' }></span>
                        <span className={ menuOpen ? 'active' : '' }></span>
                    </div>
                    <ul className={`nav-content ${ menuOpen ? 'active' : '' }`}>
                        <li> <a onClick={ () => closeMenu() } href='#home'>Home</a></li>
                        <li> <a onClick={ () => closeMenu() } href='#projects'>Projects</a></li>
                        <li> <a onClick={ () => closeMenu() } href='#skills'>Skills</a></li>
                        <li> <a onClick={ () => closeMenu() } href='#about-me'>About Me</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
