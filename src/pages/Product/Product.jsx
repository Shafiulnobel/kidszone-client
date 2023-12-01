import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { PacmanLoader } from 'react-spinners';

const Product = () => {
  useTitle('Products')
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    fetch('https://kidszone-server.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });

    fetch('https://kidszone-server.vercel.app/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = category => {
    // Check if the "All" checkbox is selected
    if (category === 'All') {
      // If "All" selected, show all products
      setSelectedCategories([]);
    } else {
      // Check if the category is already selected
      if (selectedCategories.includes(category)) {
        // If selected, remove it
        setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== category));
      } else {
        // If not selected, add it
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  const filteredProducts = selectedCategories.length
    ? products.filter(product => selectedCategories.includes(product.category))
    : products;

  return (
    <div className="flex container mx-auto">
      {/* Sidebar for Filters */}
      <div className="w-1/4 p-4">
        <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-2">
          {/* Checkbox for "All" */}
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 pop font-normal"
                checked={selectedCategories.length === 0} // Check if no category is selected
                onChange={() => handleCategoryChange('All')}
              />
              All
            </label>
          </li>
          {/* Other categories */}
          {categories.map(category => (
            <li key={category._id}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 pop font-normal"
                  checked={selectedCategories.includes(category.title)}
                  onChange={() => handleCategoryChange(category.title)}
                />
                {category.title}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex-3 p-8">
        <h1 className="text-3xl font-semibold mb-6">Product Catalog</h1>
        {loading ? (
          // Display loader while fetching data
          <div className='flex justify-center'> <PacmanLoader color="#36d7b7" /></div>):
          (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div className='relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md'>
                <a href="#">
                  <img class="h-60 rounded-t-lg object-cover" src={product.image} alt="product image" />
                </a>
                {product.availability === 'In stock' ? <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-green-300 text-center text-sm text-white">{product.availability}</span> :
                  <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-green-300 text-center text-sm text-white pop font-normal">{product.availability}</span>
                }
                <div className='mt-4 px-5 pb-5'>
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-slate-900 pop font-semibold">{product.title}</h5>
                  </a>
                  <div class="mt-2.5 mb-5 flex items-center">
                    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}.0</span>
                    <span class="text-yellow-300 text-md font-semibold"><Rating
                      placeholderRating={product.rating}
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar />}
                      fullSymbol={<FaStar />} readonly
                    /> </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>
                      <span class="text-3xl pop font-bold text-slate-900">${product.new_price}</span>
                      <span class="text-sm text-slate-900 line-through pop">${product.old_price}</span>
                    </p>
                    <Link to={`${product._id}`}> <button className='btn bg-[#11d5e1]'>Details</button></Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
      </div>
    </div>
  );
};

export default Product;
