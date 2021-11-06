import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const PaypalPayment = () => {

    return (
        <div className="p-5 text-center">
            <div>
                <PayPalButton/>
            </div>
        </div>
    );
};

export default PaypalPayment;