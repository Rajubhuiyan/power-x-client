import React from 'react';
import Footer from '../../Home/Footer/Footer';
import OthersHeader from '../../OurClasses/OthersHeader/OthersHeader';
import ClassScheduleMain from '../ClassScheduleMain/ClassScheduleMain';

const ClassSchedule = () => {
    const category = {
        name: 'ADVANCED GYM'
    }
    return (
        <div>
            <OthersHeader category={category.name}></OthersHeader>
            <ClassScheduleMain></ClassScheduleMain>
            <Footer></Footer>
        </div>
    );
};

export default ClassSchedule;