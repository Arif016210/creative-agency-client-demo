import React from 'react';
import FooterForm from '../FooterForm/FooterForm';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container" >
            <FooterForm></FooterForm>
            <p>copyright Orange labs 2020</p>
        </div>
    );
};

export default Footer;