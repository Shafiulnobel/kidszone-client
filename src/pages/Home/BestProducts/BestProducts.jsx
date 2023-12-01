import React, { useEffect, useState } from 'react';
import './BestProducts.css'
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { PacmanLoader, PulseLoader } from 'react-spinners';

const BestProducts = () => {
    const [selectedOption, setSelectedOption] = useState('NEW COLLECTION');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const[loading,setLoading] =useState(false)
    useEffect(() => {
        setLoading(true); // Set loading to true before making the API call
        fetch(`https://kidszone-server.vercel.app/products?type=${selectedOption}`)
            .then(res => res.json())
            .then(data => {
                setFilteredProducts(data);
                setLoading(false); // Set loading to false when the data is received
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, [selectedOption]);

    return (
        <div className='my-5 container mx-auto'>
            <p className='para text-2xl text-center text-[#ff487a] mb-3'>New Trending</p>
            <h2 className='header text-5xl text-center text-[#11d6e1] mb-3'>Best Products</h2>
            <div className='text-center'>
            <ul className="menu menu-horizontal">
                    <li className='me-3 pop font-normal'>
                        <Link
                            to="/"
                            onClick={() => setSelectedOption('NEW COLLECTION')}
                            className={selectedOption === 'NEW COLLECTION' ? 'active' : ''}
                        >
                            NEW COLLECTION
                        </Link>
                    </li>
                    <li className='pop font-normal'>
                        <Link
                            to="/"
                            onClick={() => setSelectedOption('BEST SALE')}
                            className={selectedOption === 'BEST SALE' ? 'active' : ''}
                        >
                            BEST SALE
                        </Link>
                    </li>
                </ul>
            </div>
            {loading ? (
                // Display loader while fetching data
                <div className='flex justify-center my-10'> <PulseLoader color="#36d7b7" /></div>
               
            ) : (
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 40
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {filteredProducts.map(product => (
                    <div class="wrapper my-5 antialiased text-gray-900">
                        <div key={product._id} className="crd-wrapper">
                            <div className='crd'>
                                <div className="image-container"> 
                                    <img src={product.image} alt="random image" className="crd-image w-96 h-96 object-cover object-center rounded-lg shadow-md" />
                                    {/* Buttons appear on image hover */}
                                    <div className="crd-buttons">
                                        {product.availability === 'In stock' && <button className="btn btn-circle bg-[#11d6e1] text-white me-3">
                                        <IoCartOutline className='text-xl '/>
                                        </button>}
                                        <Link to={`products/${product._id}`}>
                                        <button className="btn btn-circle bg-[#11d6e1] text-white">
                                        <IoMdInformationCircleOutline className='text-xl'/>
                                        </button>
                                        </Link>
                                     
                                    </div>
                                </div>
                            </div>
                            <div class="relative px-4 -mt-16  ">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <div class="flex items-baseline">
                                        {product.availability==='In stock'? <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  font-normal pop tracking-wide">
                                            {product.availability}
                                        </span>:
                                        <span class="bg-red-200 text-red-800 text-xs px-2 inline-block rounded-full font-semibold tracking-wide">
                                        {product.availability}
                                    </span>
                                        }
                                    </div>

                                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate pop ">{product.title}</h4>

                                    <div class="mt-1">
                                        <span className='pop font-normal'>${product.new_price} </span> <span className='ms-3 line-through pop font-normal'>${product.old_price}</span>
                                        {/* <span class="text-gray-600 text-sm">   /wk</span> */}
                                    </div>
                                    <div class="mt-4">
                                        <span class="text-teal-600 text-md font-semibold"><Rating
                                            placeholderRating={product.rating}
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />} readonly
                                        /> </span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </Carousel>
            )}
        </div>
    );
};

export default BestProducts;