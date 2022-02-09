import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JwmF1GL4k4AAeeN7uCZU918ITa12LxUK4zLqbyTzw5Om4lK6iP9Mg1vQpYJNhcYUkgKl9D0uglaia0L7JKzfWuP009mHtRhHe');

const Payment = () => {
    const { ordersId } = useParams()
    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(`https://still-ravine-04691.herokuapp.com/orders/${ordersId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [ordersId])
    return (
        <div>
            <h2>Please Pay For: {order.userName} </h2>
            <h2>Order Location: {order.location} </h2>
            <h4>Pay: {order.price}</h4>
            {order.price && <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements>}
        </div>
    );
};

export default Payment;