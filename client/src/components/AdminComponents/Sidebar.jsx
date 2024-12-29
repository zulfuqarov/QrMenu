import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    return (
        <div className='h-[100vh] pt-[10px] relative max-[991px]:fixed max-[991px]:z-50'>
            <span
                className="text-orange-500 text-4xl p-2 cursor-pointer absolute  top-0 "
                onClick={toggleSidebar}
            >

                {
                    isSidebarOpen ? <i className="fa-solid fa-rectangle-xmark"></i> :
                        <i className="fa-solid fa-bars"></i>
                }

            </span>
            <div className="h-full pt-[40px]">
                {isSidebarOpen && (
                    <div className="sidebar p-2 w-[300px] overflow-y-auto text-center h-full bg-[#2C2C2C]">
                        <div className="text-gray-100 text-xl">
                            <div className="p-2.5 mt-1 flex items-center">
                                <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-orange-600"></i>
                                <h1 className="font-bold text-gray-200 text-[15px] ml-3">Admin Panel</h1>
                                <i
                                    className="bi bi-x cursor-pointer ml-auto"
                                    onClick={toggleSidebar}
                                ></i>
                            </div>
                            <div className="my-2 bg-gray-600 h-[1px]"></div>
                        </div>
                        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                            <i className="bi bi-search text-sm"></i>
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                            />
                        </div>
                        <Link to="/Admin/Menu" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white">
                            <i className="bi bi-bookmark-fill"></i>
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Menu</span>
                        </Link>
                        <Link to="/Admin/Category" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white">
                            <i className="bi bi-house-door-fill"></i>
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Category</span>
                        </Link>
                        <Link to="/Admin/Product" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white">
                            <i className="bi bi-bookmark-fill"></i>
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Product</span>
                        </Link>
                        {/* <div className="my-4 bg-gray-600 h-[1px]"></div>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"
                        onClick={toggleDropdown}
                    >
                        <i className="bi bi-chat-left-text-fill"></i>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                            <span className={`text-sm ${isDropdownOpen ? 'rotate-180' : ''}`} id="arrow">
                                <i className="bi bi-chevron-down"></i>
                            </span>
                        </div>
                    </div>
                    {isDropdownOpen && (
                        <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
                            <h1 className="cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1">Social</h1>
                            <h1 className="cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1">Personal</h1>
                            <h1 className="cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1">Friends</h1>
                        </div>
                    )}
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
                    </div> */}
                    </div>
                )}
            </div>
        </div>

    );
};

export default Sidebar;
