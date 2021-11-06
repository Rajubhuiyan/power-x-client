import React from 'react';
import Footer from '../Home/Footer/Footer';
import OthersHeader from '../OurClasses/OthersHeader/OthersHeader';
import PricingCartContainer from '../PricingCartContainer/PricingCartContainer';

const PricingSchedule = () => {
    const category = {
        name: 'Pricing Plans'
    }
    return (
        <>
            <OthersHeader category={category.name}></OthersHeader>
            <PricingCartContainer/>
            <Footer></Footer>
        </>
    );
};

export default PricingSchedule;