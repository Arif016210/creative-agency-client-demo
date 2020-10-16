import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';


const Header = () => {
    return (
        <div className="header-container" >
            <div className="container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;