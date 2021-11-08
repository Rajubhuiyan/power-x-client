import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import OurClass from '../OurClass/OurClass';


const OurClasses = () => {

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://desolate-refuge-31530.herokuapp.com/getCategoryItem')
            .then(res => res.json())
            .then(data => {
                setCategory(data);
                setIsLoading(false)
            })
    }, [])

    // insert data
    // {fetch('http://localhost:5000/addCategory', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(classesData)
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    //     console.log(classesData);}

    return (
        <section className="container mt-5">
            {isLoading ? <Loading></Loading> :
                <div className="row">
                    {
                        category.map(cd => <OurClass key={cd.id} cd={cd}></OurClass>)
                    }
                </div>
            }
        </section>
    );
};

export default OurClasses;