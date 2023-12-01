import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    useEffect(() => {
        // Fetch categories when the component mounts
        fetch('https://kidszone-server.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);
    const handleAddProducts = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const title = form.get('title');
        const rating = form.get('rating');
        const new_price = form.get('new_price');
        const old_price = form.get('old_price');
        const availability = form.get('availability');
        const types = form.get('types');
        const category = form.get('category');
        const image = form.get('image');
        const data = new FormData();
        data.append('image', image)
        fetch('https://api.imgbb.com/1/upload?key=513f7edddf0a7e2cced65e9085374bfe', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                const userData = {
                    title,
                    rating,
                    new_price,
                    old_price,
                    availability,
                    types,
                    category,
                    image: data.data.url
                }

                fetch('https://kidszone-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Product Added Successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                        }
                    })
            })
    }
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddProducts} className="card-body" encType="multipart/form-data">
                        <div className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Enter Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='rating' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Price</span>
                                </label>
                                <input type="text" name='new_price' placeholder='New Price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Old Price</span>
                                </label>
                                <input type="text" name='old_price' placeholder='Old Price' className="input input-bordered" required />
                            </div>
                            <div className="form-control my-3">
                                <select name='availability' className="select select-bordered w-full max-w-xs">
                                    <option value="" disabled selected>Availability</option>
                                    <option value="In stock">In stock</option>
                                    <option value="Out of stock">Out of stock</option>
                                </select>
                            </div>
                            <div className="form-control my-3">
                                <select name='types' className="select select-bordered w-full max-w-xs">
                                    <option value="" disabled selected>Types</option>
                                    <option value="NEW COLLECTION">NEW COLLECTION</option>
                                    <option value="BEST SALE">BEST SALE</option>
                                    <option value="SPECIAL OFFER">SPECIAL OFFER</option>
                                </select>
                            </div>
                            <div className="form-control my-3">
                                <select name='category' value={selectedCategory} className="select select-bordered w-full max-w-xs" onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category._id} value={category.title}>
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Image</span>
                                </label>
                                <input name='image' type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;