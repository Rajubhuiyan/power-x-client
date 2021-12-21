import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navvar = () => {

    const handleSignOut = () => {
        sessionStorage.removeItem('googleToken');
        window.location.reload();
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link style={{ fontWeight: '700', fontSize: '30px' }} className="navbar-brand text-white" to="/">POWER <span style={{ color: 'yellow', fontWeight: '700', fontSize: '30px' }}>X</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link text-white" to="/">Services</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link text-white" style={{ textDecoration: 'none' }} to="/ourClasses">Our Classes</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link text-white" to="/">About Us</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link text-white" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link text-white" to="/">Blog</Link>
                            </li>
                            <li className="nav-item me-4">
                                {
                                    sessionStorage.getItem('googleToken') ? <Link onClick={handleSignOut} className="nav-link text-white" to="/">Sign Out</Link> : <Link className="nav-link text-white" style={{ textDecoration: 'none' }} to="/login">Log In </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navvar;