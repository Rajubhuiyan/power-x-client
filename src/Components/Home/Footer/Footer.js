import React from 'react';
import './Footer.css';
import faceBookIcon from '../../../images/facebook-icon.png'
import instaGramIcon from '../../../images/instagram-icon.png';
import tweeterIcon from '../../../images/twitter-icon.png';
import whatsAppIcon from '../../../images/whatsapp-icon.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section id="footer" className="footer-container mt-5">
            <div className="container">
                <div className="row pt-5 pb-3">
                    <div className="col-sm-4 col-md-4">
                        <Link to="/"style={{ fontWeight: '700', fontSize: '30px' }} className="navbar-brand text-white" >POWER <span style={{ color: 'yellow', fontWeight: '700', fontSize: '30px' }}>X</span></Link>
                    </div>
                    <div className="col-md-2">
                        <p style={{ fontWeight: 'bold' }} className="text-white">Need Help?</p>
                        <p className="text-white">Help Center</p>
                        <p className="text-white">Email Support</p>
                        <p className="text-white">Live Chat</p>
                        <p className="text-white">Gift Certificate</p>
                        <p className="text-white">Send Us Feedback</p>
                    </div>
                    <div className="col-md-2">
                        <p style={{ fontWeight: 'bold' }} className="text-white">Digital Resources</p>
                        <p className="text-white">Article</p>
                        <p className="text-white"> E-book</p>
                    </div>
                    <div className="col-md-2">
                        <p style={{ fontWeight: 'bold' }} className="text-white">Connect With Us</p>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={faceBookIcon} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src={instaGramIcon} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src={tweeterIcon} alt="" />
                            </div>
                            <div className="col-md-3">
                                <img src={whatsAppIcon} alt="" />
                            </div>
                        </div>
                        <p className="text-white mt-2"> Forum</p>
                    </div>
                    <div className="col-md-2">
                        <p style={{ fontWeight: 'bold' }} className="text-white">Join Our Newsletter</p>
                        <small className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, hic.</small>
                    </div>
                </div>
            </div>
            <footer className="text-center pb-2">
                <small style={{color: 'lightgrey'}}> © {new Date().getFullYear()} Raju Bhuiyan. All rights reserved</small>
            </footer>
        </section>
    );
};

export default Footer;