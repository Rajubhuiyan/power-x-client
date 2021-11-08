import React from 'react';
import bodyIcon from '../../../images/body.png';
import carIcon from '../../../images/car.png';
import giftIcon from '../../../images/gift.png'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
const aboutUsData = [
    {
        title: 'Free Fitness Training',
        cat: 'fitness',
        image : bodyIcon
    },
    {
        title: 'Tons Of Cardio & Strength',
        cat: 'strength',
        image: carIcon
    },
    {
        title: 'No Commitment Membership',
        cat: 'membership',
        image: giftIcon
    }
]

const WhyChooseUsContainer = () => {

    return (
        <section className="container">
            <div className="text-center">
                <h1> <span style={{color: 'rgb(252, 216, 66)'}}>Why</span> Choose Us</h1>
            </div>
            <div className="row mb-5 mt-5">
                {
                    aboutUsData.map((data) => <WhyChooseUs key={data.cat} data={data}></WhyChooseUs>)
                }
            </div>
        </section>
    );
};

export default WhyChooseUsContainer;