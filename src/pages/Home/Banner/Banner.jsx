import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="banner hero flex justify-start md:p-40">
          <div className="hero-content ">
            <div className=" space-y-6">
              <p className="pt-6 para text-2xl text-gray-400">Free Delivery above $50</p>
              <h1 className="text-5xl font-bold header text-[#11d6e1]">Unique Interior</h1>
              <p className='header text-2xl text-gray-400'>Best Place for Kids</p>
              <span className='border-dashed border-2 border-pink-300 inline-block rounded-full p-1 group '>
              <Link to="/products">
              <button className="btn bg-pink-300 text-white rounded-full p-4 transition duration-300 ease-in-out group-hover:bg-yellow-400 ">
                  Shop Now
                </button>
              </Link>
              </span>
            </div>
          </div>
        </div>
        {/* <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle border-dashed border-2 border-indigo-600">❮</a>
          <a href="#slide2" className="btn btn-circle border-dashed border-2 border-indigo-600">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        {/* <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}
        <div className="banner1 hero flex justify-start md:p-40">
          <div className="hero-content ">
            <div className=" space-y-6">
              <p className="pt-6 para text-2xl text-gray-400">Free Delivery above $50</p>
              <h1 className="text-5xl font-bold header text-[#11d6e1]">WELCOME</h1>
              <p className='header text-2xl text-gray-400'>Best Cloth for Kids</p>
              <span className='border-dashed border-2 border-pink-300 inline-block rounded-full p-1 group '>
              <Link to="/products">
              <button className="btn bg-pink-300 text-white rounded-full p-4 transition duration-300 ease-in-out group-hover:bg-yellow-400 ">
                  Shop Now
                </button>
              </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle border-dashed border-2 border-indigo-600">❮</a>
          <a href="#slide1" className="btn btn-circle border-dashed border-2 border-indigo-600">❯</a>
        </div>
      </div>
    </div>

  );
};

export default Banner;