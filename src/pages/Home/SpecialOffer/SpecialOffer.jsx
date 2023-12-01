import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import Carousel from 'react-multi-carousel';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { PacmanLoader, PulseLoader } from 'react-spinners';

const SpecialOffer = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const type = "SPECIAL OFFER"
    useEffect(() => {
        setLoading(true);
        fetch(`https://kidszone-server.vercel.app/products?type=${type}`)
            .then(res => res.json())
            .then(data => {
                setFilteredProducts(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, [])
    return (
        <div className='my-5 container mx-auto'>
            <p className='para text-2xl text-center text-[#ff487a] mb-3'>Top Collections</p>
            <h2 className='header text-5xl text-center text-[#11d6e1] mb-3'>Special Offer</h2>

            {loading ? (
                // Display loader while fetching data
                <div className='flex justify-center my-10'> <PulseLoader color="#36d7b7" /></div>) : 
                (<Carousel
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
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
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
                        <div class="wrapper my-7 antialiased text-gray-900">
                            <div key={product.id} className="crd-wrapper">
                                <div className='crd'>
                                    <div className="image-container">
                                        <img src={product.image} alt="random image" className="crd-image w-96 h-96 object-cover object-center rounded-lg shadow-md" />
                                        {/* Buttons appear on image hover */}
                                        <div className="crd-buttons">
                                            {product.availability === 'In stock' && <button className="btn btn-circle bg-[#11d6e1] text-white me-3">
                                                <IoCartOutline className='text-xl ' />
                                            </button>}
                                            <Link to={`products/${product._id}`}>
                                                <button className="btn btn-circle bg-[#11d6e1] text-white">
                                                    <IoMdInformationCircleOutline className='text-xl' />
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div class="relative px-4 -mt-16  ">
                                    <div class="bg-white p-6 rounded-lg shadow-lg">
                                        <div class="flex items-baseline">
                                            {/* <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            {product.availability}
                                        </span> */}
                                            {product.availability === 'In stock' ? <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full font-normal pop tracking-wide">
                                                {product.availability}
                                            </span> :
                                                <span class="bg-red-200 text-red-800 text-xs px-2 inline-block rounded-full font-semibold tracking-wide">
                                                    {product.availability}
                                                </span>
                                            }
                                            {/* <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                                2 baths  &bull; 3 rooms
                                            </div> */}
                                        </div>

                                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate pop">{product.title}</h4>

                                        <div class="mt-1">
                                            <span className='font-normal pop'>${product.new_price} </span> <span className='ms-3 line-through font-normal pop'>${product.old_price}</span>
                                            {/* <span class="text-gray-600 text-sm">   /wk</span> */}
                                        </div>
                                        <div class="mt-4">
                                            <span class="text-teal-600 text-md font-semibold"><Rating
                                                placeholderRating={product.rating}
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={<FaStar />}
                                                fullSymbol={<FaStar />} readonly
                                            /> </span>
                                            {/* <span class="text-sm text-gray-600">(based on 234 ratings)</span> */}
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

export default SpecialOffer;