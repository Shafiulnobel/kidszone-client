import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/logo_design_2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from 'react-icons/io5';
import useCart from '../../../hooks/useCart';
import ActiveLink from '../../ActiveLink/ActiveLink';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/products">Products</ActiveLink></li>
                        {user?.email && <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>}
                    </ul>
                </div>
                <Link className="">
                    <img className='w-1/2' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                    <li><ActiveLink to="/">Home</ActiveLink></li>
                    <li><ActiveLink to="/products">Products</ActiveLink></li>
                    {user?.email && <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/cart">
                <div className="indicator me-7" >
                <span className="indicator-item badge badge-secondary">{cart.length}+</span> 
                <div className='border-dashed border-2 border-pink-300 inline-block rounded-full p-1 group'>
                        <button className="btn btn-circle  bg-pink-300 text-white rounded-full p-1 transition duration-300 ease-in-out group-hover:bg-yellow-400">
                            <IoCartOutline className='text-xl ' />
                        </button>
                    </div>
                </div>
                </Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user ? <img alt="Tailwind CSS Navbar component" src={user?.photoURL} /> :
                                <p><FaUserCircle className='w-full h-fit' /></p>}
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>}

                        {user ? <button onClick={handleLogOut} className='btn h-1/2 w-1/3'>Logout</button> :
                            <li><Link to="/login">Login</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;