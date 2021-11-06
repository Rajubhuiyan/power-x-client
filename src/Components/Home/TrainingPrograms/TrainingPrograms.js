import React from 'react';
import TrainingProgram from '../TraininfProgram/TrainingProgram';

const programData = [
    {
        title: 'Yoga Training Session',
        category: 'yoga',
        id: 1
    },
    {
        title: 'Cardio Training Session',
        category: 'cardiyo',
        id: 2
    }
]

const TrainingPrograms = () => {
    return (
        <section className="container mt-5">
            <div className="text-center">
                <h1>Training <span style={{ color: '#FCD842' }}>Programs</span> </h1>
            </div>
            <div className="row mt-5">
                {
                    programData.map(pg => <TrainingProgram program={pg}></TrainingProgram>)
                }
            </div>
        </section>
    );
};

export default TrainingPrograms;