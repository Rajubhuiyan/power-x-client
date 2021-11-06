import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TrainingCard.css'
const TrainingProgram = ({ program }) => {
    console.log(program.category);
    return (
        <div className="col-md-6">
            <div className={`training-card ${program.category}-container mb-5 d-flex align-items-end`}>
                <div className="training-button d-flex align-items-center justify-content-center mb-5">
                    <button style={{background: 'none', border: 'none'}}>
                        <h4>{program.title} <FontAwesomeIcon className="ms-3" icon={faArrowRight} /> </h4>
                        
                    </button>
                </div>
            </div>
        </div >
    );
};

export default TrainingProgram;