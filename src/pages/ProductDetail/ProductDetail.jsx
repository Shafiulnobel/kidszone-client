import React, { useContext } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import useHandleCart from '../../hooks/useHandleCart';

const ProductDetail = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    const [, refetch, handleCart] = useCart()
    //     const handleCart = e => {
    //         e.preventDefault();
    //         const form = e.target;
    //         const title = form.title.value;
    //         const email = form.email.value;
    //         const image = form.image.value;
    //         const new_price = form.new_price.value;
    //         const newCart = {title,email,image,new_price};

    //          if(user){
    //             fetch('https://kidszone-server.vercel.app/carts', {
    //                 method: 'POST',
    //                 headers: {
    //                   'content-type': 'application/json',
    //                 },
    //                 body: JSON.stringify(newCart)
    //               })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                   console.log(data)
    //                   if (data.insertedId) {
    //                     Swal.fire({
    //                       title: 'Success!',
    //                       text: 'Your Product Successfully Added to the cart',
    //                       icon: 'success',
    //                       confirmButtonText: 'Ok'
    //                     })
    //                     refetch();
    //                   }
    //                 })
    //          }
    //  }
    return (
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="sticky top-0 z-50 overflow-hidden ">
                        <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={details?.image} alt=""
                                class="object-cover w-full lg:h-full " />
                        </div>
                        <div class="flex-wrap hidden md:flex ">
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={details?.image} alt=""
                                        class="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={details?.image} alt=""
                                        class="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={details?.image} alt=""
                                        class="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={details?.image} alt=""
                                        class="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="lg:pl-20">
                        <div class="mb-8 ">
                            <span class="text-lg font-medium text-rose-500 dark:text-rose-200 pop ">{details?.types}</span>
                            <h2 class="max-w-xl mt-2 mb-6 text-2xl pop font-bold dark:text-gray-400 md:text-4xl">
                                {details?.title}</h2>
                            <div class="flex items-center mb-6">
                                <span class="text-teal-600 text-md font-semibold"><Rating
                                    placeholderRating={details?.rating}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar />}
                                    fullSymbol={<FaStar />} readonly
                                /> </span>
                            </div>
                            <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400 pop font-normal">
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                            </p>
                            <p class="inline-block mb-8 text-4xl pop font-bold text-gray-700 dark:text-gray-400 ">
                                <span>${details?.new_price}.00</span>
                                <span
                                    class="text-base pop font-normal text-gray-500 line-through dark:text-gray-400">${details?.old_price}.00</span>
                            </p>
                            {details?.availability === "In stock" ? <p class="text-green-600 dark:text-green-300 pop font-normal">{details?.availability}</p> :
                                <p class="text-red-600 dark:text-red-300 pop font-normal">{details?.availability}</p>
                            }
                        </div>
                        <div class="flex flex-wrap items-center -mx-4 ">
                            <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <form onSubmit={handleCart} className=" text-black">
                                    <div className="form-control hidden">
                                        <input type="text" name='title' placeholder="Name" defaultValue={details?.title} className="input input-bordered" required readOnly />
                                    </div>
                                    <div className="form-control hidden">
                                        <input type="email" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered" required readOnly />
                                    </div>
                                    <div className="form-control hidden">
                                        <input type="text" name='image' placeholder="image" defaultValue={details?.image} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control hidden">
                                        <input type="text" name='new_price' placeholder="image" defaultValue={details?.new_price} className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <button
                                            class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300 pop font-normal">
                                            Add to Cart
                                        </button>
                                    </div>
                                </form>
                                <Link to="/products" class="flex font-semibold text-indigo-600 text-sm mt-10">

                                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                    Continue Shopping
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;