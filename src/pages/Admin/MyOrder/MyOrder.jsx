import React, { useContext, useEffect, useState } from 'react';
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../providers/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [cart, refetch] = useCart()
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
                // console.log(data[0].carts)
                // const arr = data[0].carts[0].email;
                // console.log(arr)
                const userOrders = data.filter(order => (order.carts[0].email) === user?.email);
                console.log(userOrders);
                setOrders(userOrders);
            })
    }, [])
    return (
        <div className=''>
            <div class="container mx-auto mt-10">
                <div class="flex flex-col md:flex-row shadow-md my-10">
                    <div class="w-full md:w-3/4 bg-white px-4 md:px-10 py-10">
                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">My Orders</h1>
                            {/* <h2 class="font-semibold text-2xl">{carts.length} Items</h2> */}
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            {/* <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3> */}
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {
                            orders.map(order =>
                                <>
                                    {
                                        order.carts.map(cart => <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                            <div class="flex w-2/5 items-center">
                                                <div class="w-20">
                                                    <img class="h-24" src={cart.image} alt="" />
                                                </div>
                                                <div class="flex flex-col  ml-">
                                                    <span class="font-bold text-sm">{cart.title}</span>
                                                </div>
                                            </div>
                                            <span class="text-center w-1/5 font-semibold text-sm">${cart.new_price}.00</span>
                                            <span class="text-center w-1/5 font-semibold text-sm">${cart.new_price}.00</span>
                                        </div>)
                                    }
                                </>
                            )
                        }


                        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;