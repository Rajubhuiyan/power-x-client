import React, { useState } from 'react';
import BankPayment from '../BankPayment/BankPayment';
import GymMembershipForm from '../GymMembershipForm/GymMembershipForm';
import Footer from '../Home/Footer/Footer';
import OrderSuccessPage from '../OrderSuccessPage/OrderSuccessPage';
import OthersHeader from '../OurClasses/OthersHeader/OthersHeader';

const GymFormContainer = () => {
    const category = {
        name: 'Gym Membership'
    };

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isOrderSuccess, setIsOrderSuccess] = useState(false);
    return (
        <div>
            <OthersHeader category={category.name}></OthersHeader>
            {isOrderSuccess ? <OrderSuccessPage></OrderSuccessPage> : isFormSubmitted ? <BankPayment setIsOrderSuccess={setIsOrderSuccess}></BankPayment> : <GymMembershipForm setFormSubmitted={setIsFormSubmitted}></GymMembershipForm>
            
        }
            <Footer></Footer>
        </div>
    );
};

export default GymFormContainer;