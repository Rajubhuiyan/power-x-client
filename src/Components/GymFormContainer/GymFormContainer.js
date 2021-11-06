import React, { useState } from 'react';
import BankPayment from '../BankPayment/BankPayment';
import GymMembershipForm from '../GymMembershipForm/GymMembershipForm';
import Footer from '../Home/Footer/Footer';
import OthersHeader from '../OurClasses/OthersHeader/OthersHeader';

const GymFormContainer = () => {
    const category = {
        name: 'Gym Membership'
    };

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    return (
        <div>
            <OthersHeader category={category.name}></OthersHeader>
            {isFormSubmitted ? <BankPayment></BankPayment> : <GymMembershipForm setFormSubmitted={setIsFormSubmitted}></GymMembershipForm>}
            <Footer></Footer>
        </div>
    );
};

export default GymFormContainer;