import React from 'react';
import Logo from './Logo';
import Links from './Links';
import Account from './Account';
import '../../styles/components/navbar/Navbar.css';


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-content'>
                <Logo />
                <Links />
                <Account />
            </div>
        </div>
    );
};

export default Navbar;