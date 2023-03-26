import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer px-32 py-32 bg-black text-white justify-items-center">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software <br /> and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <a href="/" className="link link-hover">Home</a>
                <a href="/" className="link link-hover">Service</a>
                <a href="/" className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">COMPANY</span>
                <a href="/" className="link link-hover">Why Car Medic</a>
                <a href="/" className="link link-hover">About</a>
            </div>
            <div>
                <span className="footer-title">SUPPORT</span>
                <a href="/" className="link link-hover">Support Center</a>
                <a href="/" className="link link-hover">Feedback</a>
                <a href="/" className="link link-hover">Accesbility</a>
            </div>
        </footer>
    );
};

export default Footer;