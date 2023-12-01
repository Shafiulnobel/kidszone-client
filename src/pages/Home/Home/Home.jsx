import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import BestProducts from '../BestProducts/BestProducts';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import Ads from '../Ads/Ads';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Categories/>
            <BestProducts/>
            <SpecialOffer/>
            <Ads></Ads>
        </div>
    );
};

export default Home;