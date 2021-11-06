import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navvar from '../Navbar/Navvar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navvar></Navvar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;