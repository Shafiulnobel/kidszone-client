import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Category from './Category';
import { PacmanLoader } from 'react-spinners';
const Categories = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch('https://kidszone-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, [])
    return (
        <div className='my-5 container mx-auto'>
            <p className='para text-2xl text-center text-[#ff487a] mb-3'>Top Collection</p>
            <h2 className='header text-5xl text-center text-[#11d6e1] mb-3'>Category</h2>
            {loading ? (
                // Display loader while fetching data
                <div className='flex justify-center'> <PacmanLoader color="#36d7b7" /></div>) : 
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
                        items: 5,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
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
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </Carousel>
            )}
        </div>
    );
};

export default Categories;