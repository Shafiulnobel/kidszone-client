import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';  // Import your CSS file

const Category = ({ category }) => {
    const { title, image } = category;

    return (
        <Link to="#" className="card-link cd-link">
            <div className="card w-96 cd">
                <figure className="px-10 pt-10 card-image cd-image">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>

            </div>
            <div className="card-body w-96 items-center text-center cd-body">
                <h2 className="card-title header text-sm cd-title">{title}</h2>
            </div>
        </Link>
    );
};

export default Category;
