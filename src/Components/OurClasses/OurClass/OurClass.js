import React from 'react';
import './OurClass.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const OurClass = ({ cd }) => {

    return (
        <div className="col-md-4 col-sm-6">
            <div className={`training-card ${cd.category}-container mb-5 d-flex align-items-end justify-content-center`}>
                <div className="training-button d-flex align-items-center justify-content-center training-btn-position">
                    <Link to={`/classSchedule/${cd.category}`}>
                        <button style={{ background: 'none', border: 'none' }}>
                            <h4>{cd.title} <FontAwesomeIcon className="ms-3" icon={faArrowRight} /> </h4>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurClass;