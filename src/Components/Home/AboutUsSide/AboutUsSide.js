import React from 'react';
import aboutUsImg from '../../../images/aboutus.jpg';

const AboutUsSide = () => {
    return (
        <section>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-md-6 text-center mt-5">
                        <img style={{width: '400px', height: '420px'}} className="img-fluid" src={aboutUsImg} alt="" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h1 style={{color: '#A0A0A0'}}>About Us</h1>
                        <h2 className="text-warning">We Are Here To Dream</h2>
                        <h2>Our Team Is Here To Survive You.</h2>
                        <small  style={{color: '#A0A0A0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Dignissimos asperiores debitis nostrum voluptas accusamus, <br /> inventore eius non. Nostrum itaque laudantium eaque aut quo <br /> molestias corporis cum! Ea totam quidem libero!</small>
                </div>
            </div>
        </div>
        </section >
    );
};

export default AboutUsSide;