import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navvar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a style={{fontWeight: '700', fontSize: '30px'}} className="navbar-brand text-white" href="/">POWER <span style={{color: 'yellow', fontWeight: '700', fontSize: '30px'}}>X</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-white" href="/">Services</a>
                            </li>
                            <Link style={{textDecoration:'none'}} to="/ourClasses" className="nav-item me-4">
                                <a className="nav-link text-white" href="/">Our Classes</a>
                            </Link>
                            <li className="nav-item me-4">
                                <a className="nav-link text-white" href="/">About Us</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-white" href="/">Blog</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-white" href="/">Pricing</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-white" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navvar;