import React, { useState, useEffect } from 'react';
import './Nav.css';
import avatar from './avatar.png';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });    
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix Logo'
            />
            <ul className='nav__menu'>
                <li>Home</li>
                <li>Series</li>
                <li>Movies</li>
                <li>New Popular</li>
                <li>My List</li>
            </ul>
            <img
                className='nav__avatar'
                src={avatar}
                alt='Netflix Avatar'
            />
        </div>
    )
}

export default Nav; 
