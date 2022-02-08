import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {

    const { price, userName, email, _id } = order;
    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [process, setProcess] = useState(false)

    useEffect(() => {
        fetch('http://localhost:7000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        setProcess(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            setSuccess('')
        } else {
            setError('')
            setSuccess(paymentMethod);
        }

        // payment intent 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: { card },
                    "billing_details": {
                        name: { userName },
                        // email: email,
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        } else {
            setError('')
            setSuccess('Your Payment Placed Successfully.')
            console.log(paymentIntent);
            setProcess(false)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {process.true ? <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : <button type="submit" disabled={!stripe}>
                    Pay {price}
                </button>}
            </form>
            {
                error && <div class="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            {
                success && <div class="alert alert-success" role="alert">
                    {success}
                </div>
            }
        </div>
    );
};

export default CheckoutForm;