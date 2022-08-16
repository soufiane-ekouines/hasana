import React from 'react';
import Content from './Content';
import Image from './Image';
import '../../../styles/components/container/first content/Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='content'>
                <Content />
                <Image />
            </div>
        </div>
    );
};

export default Header;