import React from 'react';
import Category from '../Category/Category';
import watchIcon from '../../../images/watch.png';
import workOutIcon from '../../../images/workout.png';
import nutritionIcon from '../../../images/nutrition.png'

const categoryList = [
    {
        id: 1,
        title: 'Progression',
        icon: watchIcon
    },
    {
        id: 2,
        title: 'WorkOut',
        icon : workOutIcon
    },
    {
        id: 3,
        title: 'Nutrition',
        icon: nutritionIcon
    }
]

const Categories = () => {
    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="row container">
                {
                    categoryList.map(cg => <Category cg={cg}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;