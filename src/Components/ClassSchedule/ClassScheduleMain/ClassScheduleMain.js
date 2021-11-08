import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import checkImg from '../../../images/check-img.png';
import './ClassScheduleMain.css';


const ClassScheduleMain = () => {

    const { categoryName } = useParams();

    const [classData, setClassData] = useState({});
    useEffect(() => {
        fetch(`https://desolate-refuge-31530.herokuapp.com/category/${categoryName}`)
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [categoryName])

    return (
        <section className="container mt-5 mb-3">
            <div className="row">
                <div className="col-md-8 ">
                    <div className={`${classData.category}-container mb-4`}>

                    </div>
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
                            <Link style={{ textDecoration: 'none' }} to="/pricingSchedule"><button className="btn btn-warning">Join Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ClassScheduleMain;