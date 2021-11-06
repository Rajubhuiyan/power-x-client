import React from 'react';
import { Link } from 'react-router-dom';

const PricingCart = ({ pricingInfo }) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <p className="text-warning">Build Monthly</p>
                        <h4 className="my-0 font-weight-normal">{pricingInfo.plan}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title text-warning">$ {pricingInfo.price}</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Mobile Otimised</li>
                            <li>Best Hosting</li>
                            <li>Free Custom</li>
                            <li>Oustanding</li>
                            <li>Happy Customer</li>
                        </ul>
                        <Link to="/orderAndPayment">
                            <button type="button" className="btn btn-lg btn-block btn-warning">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCart;