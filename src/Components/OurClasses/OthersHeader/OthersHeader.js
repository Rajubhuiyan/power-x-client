import React from 'react';
import Navvar from '../../Home/Navbar/Navvar';
import './OthersHeader.css'
const OthersHeader = ({category}) => {
    return (
        <div className="header-container">
            <Navvar></Navvar>
            <section style={{height: '400px'}} className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="category-h1">{category}</h1>
                </div>
            </section>
        </div>
    );
};

export default OthersHeader;