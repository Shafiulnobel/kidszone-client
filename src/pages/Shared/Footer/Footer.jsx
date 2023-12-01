import React from 'react';
import logo from '../../../assets/logo_design_2.png'
import img from '../../../assets/foot_img.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='foot relative'>
            <div className='absolute foot-img'>
                <img src={img} alt="" />
            </div>
            <div className='container relative mx-auto main pop font-normal'>
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <img className='w-1/2' src={logo} alt="" />
                        <p>Come visit The Little Dino Center for yourself<br />so you can tour the rooms and meet some of our educators.</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;