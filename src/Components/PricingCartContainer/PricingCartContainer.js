import React from 'react';
import PricingCart from '../PricingCart/PricingCart';

const pricingData=[
    {
        plan: 'ADVANCED PLAN',
        price: 140
    },
    {
        plan: 'BASIC PLAN',
        price: 120
    },
    {
        plan: 'BEGINERS PLAN',
        price: 90
    }
]

const PricingCartContainer = () => {
    return (
        <section className="container mb-5">
            <div className="text-center mb-5 mt-5">
                <h1> <span className="text-warning">Choose The Offer</span> Thats Suits You</h1>
                <p>Lorem ipsum dolor sit amet consectetur Odit quidem sunt  <br /> quaerat commodi dolor  totam harum quae obcaecati quasi rerum.</p>
            </div>
            <div className="row">
                {
                    pricingData.map(pricingInfo => <PricingCart key={pricingInfo.price} pricingInfo={pricingInfo}></PricingCart>)
                }
            </div>
        </section>
    );
};

export default PricingCartContainer;