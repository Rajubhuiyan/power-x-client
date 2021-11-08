import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';

const GymMembershipForm = ({setFormSubmitted}) => {

    const [loggedInUser, setLoggedInUser,orderAndPayment, setOrderAndPayment] = useContext(userContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            setFormSubmitted(true);
            const shippingData = {...data};
            setOrderAndPayment({shippingInfo: shippingData})
        }
    };

    return (
        <>
            <section className="container mb-5 mt-5">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">First Name</label>
                        <input className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Last Name</label>
                        <input className="form-control" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Email</label>
                        <input defaultValue={loggedInUser.email} className="form-control"{...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Number</label>
                        <input className="form-control"{...register("number", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-4">
                    <label htmlFor="">Address</label>
                        <input className="form-control"{...register("address", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-4">
                    <label htmlFor="">Country</label>
                        <input className="form-control"{...register("country", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-4">
                    <label htmlFor="">City</label>
                        <input className="form-control"{...register("city", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-4">
                    <label htmlFor="">Postcode</label>
                        <input className="form-control"{...register("postcode", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="text-center mt-5">
                        <input className="btn btn-primary w-50 btn-lg" type="submit" />
                    </div>
                </form>
            </section>
        </>
    );
};

export default GymMembershipForm;