import React from 'react';
import OurClass from '../OurClass/OurClass';

const classesData = [
    {
        id: 1,
        title: 'PSYCHO TRAINING',
        category: 'psycho'
    },
    {
        id: 2,
        title: 'SELF DEFENCE',
        category: 'selfdefence'
    },
    {
        id: 3,
        title: 'ADVANCED GYM',
        category: 'advancedgym'
    },
    {
        id: 4,
        title: 'CARDIO TRAINING',
        category: 'cardiotraining'
    },
    {
        id: 5,
        title: 'STRENGTH TRAINING',
        category: 'strengthtraining'
    },
    {
        id: 6,
        title: 'PSYCHO TRAINING',
        category: 'psychotraining'
    },

]

const OurClasses = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                {
                    classesData.map(cd => <OurClass cd={cd}></OurClass>)
                }
            </div>
        </section>
    );
};

export default OurClasses;