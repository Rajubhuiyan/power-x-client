import React from 'react';
import Footer from '../../Home/Footer/Footer';
import OthersHeader from '../OthersHeader/OthersHeader';
import OurClasses from '../OurClasses/OurClasses';

const OurClassesContainer = () => {
    const category = {
        name: 'Our Classes'
    }
    return (
        <div>
            <OthersHeader category={category.name}></OthersHeader>
            <OurClasses></OurClasses>
            <Footer></Footer>
        </div>
    );
};

export default OurClassesContainer;