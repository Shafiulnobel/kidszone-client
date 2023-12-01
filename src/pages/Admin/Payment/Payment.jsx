import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../hooks/useCart'
const stripePromise = loadStripe('pk_test_51OHLQCG6UwLjApVmcIOYBoZ7PmeML1IsUQsYZC2UseOCFvdjxcwMUYmLiDTEAltOCe0qykLPtUUNLWt6yeFEkl8O00q3S6YRK9');

const Payment = () => {
    const[cart] = useCart();
    const total = cart.reduce((sum,item)=>sum+parseInt(item.new_price),0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm new_price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;