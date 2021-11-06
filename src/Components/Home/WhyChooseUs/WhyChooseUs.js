import React from 'react';
import './WhyChooseUs.css'
const WhyChooseUs = ({ data }) => {

    return (
        <div className="col-md-4">
            <div className="about-us-container d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <img className="img-fluid mb-3" src={data.image} alt="" />
                    <h2>{data.title}</h2>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione labore obcaecati ipsa voluptatem quidem sint ea, quae impedit nostrum.</small>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;