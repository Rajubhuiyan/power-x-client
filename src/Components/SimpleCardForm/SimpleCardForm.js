import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import './SimpleCardForm.css';
import creditCardOne from '../../images/credit-cards_amex.png';
import creditCardTwo from '../../images/credit-cards_mastercard.png';
import creditCardThree from '../../images/credit-cards_visa.png';
import PaypalPayment from '../PaypalPayment/PaypalPayment';
import { useHistory } from 'react-router';

const SimpleCardForm = () => {

const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState('');

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError('Payment Succesfully');
            history.push('/orderDone')

        }
    };

    return (
        <div className="mt-5 mb-5 container">
            <div className="d-flex justify-content-center">
                <div className="payment-container p-5">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h1>Credit Card</h1>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sint.</small>
                        </div>
                        <div className="col-md-6">
                            <img style={{ height: '30px' }} className="img-fluid me-3 mt-3" src={creditCardOne} alt="" />
                            <img style={{ height: '32px' }} className="img-fluid me-3 mt-3" src={creditCardTwo} alt="" />
                            <img style={{ height: '30px' }} className="img-fluid me-3 mt-3" src={creditCardThree} alt="" />
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            <div className="text-end mt-5">
                                <button className="btn btn-warning" type="submit" disabled={!stripe}>
                                    Next
                                </button>
                            </div>
                        </form>
                        {
                            paymentError && <h2 style={{ color: 'red' }}>{paymentError}</h2>
                        }
                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="payment-container">
                    <PaypalPayment disabled></PaypalPayment>
                </div>
            </div>
        </div>
    );
};

export default SimpleCardForm;