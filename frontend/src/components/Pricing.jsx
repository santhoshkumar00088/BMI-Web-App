import React from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom';

const Pricing = () => {
    const pricing = [
        {
            imgUrl: "/pricing.jpg",
            title: "QUARTERLY",
            price: 10000,
            length: 3
        },
        {
            imgUrl: "/pricing.jpg",
            title: "HALF_YEARLY",
            price: 36000,
            length: 6
        },
        {
            imgUrl: "/pricing.jpg",
            title: "YEARLY",
            price: 67000,
            length: 12
        },
    ];

    const handleJoinClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        alert("Please contact us through the contact box.");
    };

    return (
        <section className='pricing'>
            <h1>GYM MEMBERSHIP PLANS</h1>
            <div className="wrapper">
                {
                    pricing.map(element => {
                        return (
                            <div className="card" key={element.title}>
                                <img src={element.imgUrl} alt={element.title} />
                                <div className="title">
                                    <h1>{element.title}</h1>
                                    <h1>PACKAGE</h1>
                                    <h3>Rs {element.price}</h3>
                                    <p>for {element.length} Months</p>
                                </div>
                                <div className="description">
                                    <p><Check /> Equipment</p>
                                    <p><Check /> All Day Free Training</p>
                                    <p><Check /> Free Restroom</p>
                                    <p><Check /> 24/7 Skilled Support</p>
                                    <p><Check /> 20 Days Freezing Option</p>
                                    <Link to="#" onClick={handleJoinClick}>Join now</Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Pricing;
