import React, { useContext } from 'react';
import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCartArrowDown } from 'react-icons/fa';
const Dashboard = () => {
    const { user } = useContext(AuthContext)
    useTitle('Dashboard')
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

                {/* Header */}
                <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
                    <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                        <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                        <span className="hidden md:block">Dashboard</span>
                    </div>

                </div>
                {/* Header */}

                {/* Sidebar  */}
                <div className="fixed flex flex-col top-14 left-0 w-14 md:hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                    <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                        <ul className="flex flex-col py-4 space-y-1">
                            <li className="px-5 hidden md:block">
                                <div className="flex flex-row items-center h-8">
                                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                                </div>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                </NavLink>
                            </li>
                            {user?.email === "admin@admin.com" &&
                                <>
                                    < li >
                                        <NavLink to="/dashboard/addCategory" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                                <FaCirclePlus />
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Add Category</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addProduct" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                                <FaCirclePlus />
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Add Product</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/orders" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                            <FaCartArrowDown />
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Orders</span>
                                        </NavLink>
                                    </li>
                                </>

                            }
                            {user?.email === "admin@admin.com" ||
                                <>
                                    <li>
                                        <NavLink to="/dashboard/payment" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Payment</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myOrder" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                            <span className="inline-flex justify-center items-center ml-4">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                            </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">My Orders</span>
                                        </NavLink>
                                    </li>
                                </>
                            }


                            <li>
                                <NavLink to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                                </NavLink>
                            </li>

                        </ul>
                        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
                    </div>
                </div>
                {/* Sidebar  */}

                <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                    <Outlet />
                </div>
                <div>


                </div>
            </div>
        </div >

    );
};

export default Dashboard;