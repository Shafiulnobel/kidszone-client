import React from 'react';
import sponsor1 from '../../../assets/sponsor-1.png'
import sponsor2 from '../../../assets/sponsor-2.png'
import sponsor3 from '../../../assets/sponsor-3.png'
import sponsor4 from '../../../assets/sponsor-4.png'
import sponsor5 from '../../../assets/sponsor-5.png'
import Carousel from 'react-multi-carousel';
const Ads = () => {
    return (
        <div className='bg-[#ffeef3]'>
            <div className='container mx-auto my-5'>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={1000}
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
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 3,
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
                    <div>
                        <img src={sponsor1} alt="" />
                    </div>
                    <div>
                        <img src={sponsor2} alt="" />
                    </div>
                    <div>
                        <img src={sponsor3} alt="" />
                    </div>
                    <div>
                        <img src={sponsor4} alt="" />
                    </div>
                    <div>
                        <img src={sponsor5} alt="" />
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Ads;