import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const ShoppingCart = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const[orders,setOrders] = useState([])
    const[cart,refetch]=useCart()
    const url = `https://kidszone-server.vercel.app/carts?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCarts(data));
    }, [url]);
    useEffect(() => {
        fetch('https://kidszone-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])
    const handleDelete = id => {
           if(user){
            fetch(`https://kidszone-server.vercel.app/carts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        refetch()
                        const remaining = carts.filter(cart => cart._id !== id)
                        setCarts(remaining)
                    }
                })
           }
    }
    const handleDeleteAll = () => {
           if(user){
            fetch(`https://kidszone-server.vercel.app/carts`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        refetch()
                    }
                })
           }
        
    }
    const handleCheckout = async () => {
        // const proceed = window.confirm('Are you sure you want to checkout?');
        Swal.fire({
            title: "Are you sure?",
            text: "You want to checkout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, checkout!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch('https://kidszone-server.vercel.app/checkout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ carts }),
                    });
    
                    const data = await response.json();
    
                    if (data.success) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Checkout Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        setCarts([]);
                        handleDeleteAll();
                    } else {
                        alert('Checkout Failed. Please try again.');
                    }
                } catch (error) {
                    console.error('Error during checkout:', error);
                    alert('An error occurred during checkout. Please try again.');
                }
            }
          });
     

        
    };
    const calculateTotalPrice = () => {
        return carts.reduce((total, cart) => total + parseInt(cart.new_price), 0);
        // console.log(sum)
    };
    const shippingCost = 10.00;

    return (
        <div className='bg-gray-100'>
            <div class="container mx-auto mt-10">
                <div class="flex flex-col md:flex-row shadow-md my-10">
                    <div class="w-full md:w-3/4 bg-white px-4 md:px-10 py-10">
                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 class="font-semibold text-2xl">{carts.length} Items</h2>
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            {/* <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3> */}
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {
                            carts.map(cart => <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex w-2/5">
                                    <div class="w-20">
                                        <img class="h-24" src={cart.image} alt="" />
                                    </div>
                                    <div class="flex flex-col  ml-4 flex-grow">
                                        <span class="font-bold text-sm">{cart.title}</span>
                                        <a href="#" onClick={()=>handleDelete(cart._id)} class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                    </div>
                                </div>
                                <span class="text-center w-1/5 font-semibold text-sm">${cart.new_price}.00</span>
                                <span class="text-center w-1/5 font-semibold text-sm">${cart.new_price}.00</span>
                            </div>
                            )
                        }


                        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" class="w-full md:w-1/4 px-4 md:px-8 py-10">
                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div class="flex justify-between mt-10 mb-5">
                            <span class="font-semibold text-sm uppercase">Items {orders.length}</span>
                            <span class="font-semibold text-sm">${calculateTotalPrice().toFixed(2)}</span>
                        </div>
                        <div>
                            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select class="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div class="py-10">
                            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="No offer on promo code" class="p-2 text-sm w-full" readOnly />
                        </div>
                        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" disabled>Apply</button>
                        <div class="border-t mt-8">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>${(calculateTotalPrice() + shippingCost).toFixed(2)}</span>
                            </div>
                            <button onClick={handleCheckout} class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;