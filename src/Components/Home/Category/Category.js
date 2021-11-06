import React from 'react';
import './Category.css'
const Category = ({ cg }) => {
    console.log(cg);

    return (
        <div className="col-md-4 col-sm-12 mb-3">
            <div className="category-container d-flex align-items-center">
                <div className={`card ${cg.title}-category`}>
                    <div className={`card-body text-center`}>
                        <img className="img-fluid" src={cg.icon} alt="" />
                        <h2 className="card-title mt-3">{cg.title}</h2>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fuga!</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;