import React from 'react';
import { Link } from 'react-router-dom';
import advancedGym from '../../../images/advancedgym-bg.jpg';
import checkImg from '../../../images/check-img.png';
import './ClassScheduleMain.css'
const ClassScheduleMain = () => {
    return (
        <section className="container mt-5 mb-3">
            <div className="row">
                <div className="col-md-8">
                    <img style={{ width: '100%' }} className="img-fluid" src={advancedGym} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloremque fuga! Dolore excepturi provident saepe ducimus accusamus ullam illum iste, accusantium consequuntur quos aliquam maxime. Ut, inventore corporis temporibus labore eius facilis, dolores officiis quaerat amet laboriosam unde fugit mollitia voluptas odio doloribus, vero incidunt repellendus quas exercitationem molestiae excepturi molestias. Consequatur omnis eius dolorem quia laborum voluptatibus nostrum fugiat alias! Quo reprehenderit suscipit, minus dignissimos cumque saepe porro quasi non a autem numquam quaerat accusantium delectus ut dolore maxime!</p>

                </div>
                <div className="col-md-4">
                    <h1> <span className="text-warning"> Class</span> Schedule</h1>
                    <div className="mt-4">
                        <div className="row ms-3">
                            <div className="col-md-6 mb-4">
                                <div className="day-container pt-2 pb-2 ps-4 pe-4">
                                    <h5>Monday</h5>
                                    <p className="text-warning">8.00 AM - 9.00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="day-container pt-2 pb-2 ps-4 pe-4">
                                    <h5>Monday</h5>
                                    <p className="text-warning">8.00 AM - 9.00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="day-container pt-2 pb-2 ps-4 pe-4">
                                    <h5>Monday</h5>
                                    <p className="text-warning">8.00 AM - 9.00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="day-container pt-2 pb-2 ps-4 pe-4">
                                    <h5>Monday</h5>
                                    <p className="text-warning">8.00 AM - 9.00 PM</p>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mb-4">
                                <div className="day-container pt-2 pb-2 ps-4 pe-4">
                                    <h5>Monday</h5>
                                    <p className="text-warning">8.00 AM - 9.00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="day-container pt-2 pb-2 ps-4 pe-4">
                                    <h5>Monday</h5>
                                    <p className="text-warning">8.00 AM - 9.00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h5><img src={checkImg} alt="" />Having Slimmer Shapely Thighs</h5>
                    <h5><img src={checkImg} alt="" />Having Slimmer Shapely Thighs</h5>
                    <h5><img src={checkImg} alt="" />Having Slimmer Shapely Thighs</h5>
                    <h5><img src={checkImg} alt="" />Having Slimmer Shapely Thighs</h5>
                    <h5><img src={checkImg} alt="" />Having Slimmer Shapely Thighs</h5>
                    <h5><img src={checkImg} alt="" />Having Slimmer Shapely Thighs</h5>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-md-end justify-content-md-end join-btn-style">
                        <div>
                            <Link style={{textDecoration: 'none'}} to="/pricingSchedule"><button className="btn btn-warning">Join Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ClassScheduleMain;