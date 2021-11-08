import React, { useContext, useEffect } from 'react';
import { userContext } from '../../App';
import tom from '../../images/tom.gif';

const OrderSuccessPage = () => {
    const [loggedInUser, setLoggedInUser, orderAndPayment, setOrderAndPayment] = useContext(userContext);
    useEffect(() => {
        fetch('http://localhost:5000/sendPayment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderAndPayment)
        })
    }, [orderAndPayment])
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div>
                <h1 className="text-center">Order Done</h1>
                <img style={{ height: '60vh' }} src={tom} alt="" />
            </div>
        </div>
    );
};

export default OrderSuccessPage;