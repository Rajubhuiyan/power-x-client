import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Jl41xDbiXlp1RLtUKUxRWlUEiufxdyO32ipf5SKgdmpkIU8ofzGLqqUXK1NBOz8uJNsoKkIJS7G98xcGRbVlVqD00DEkkNS46');
const BankPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm />
            </Elements>
        </div>
    );
};

export default BankPayment;