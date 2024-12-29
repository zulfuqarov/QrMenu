import React, { useState } from 'react'
import AdminCategoryList from '../components/AdminComponents/AdminCategoryList'
import CategoryModal from '../components/AdminComponents/CategoryModal';

const categories = [
    {
        id: 1,
        name: "Beverages",
        description: "Soft drinks, coffee, tea, and more.",
        image: "https://cdn.clopos.com/hollywood/54f6d4d7-0f8e-4cb0-bc94-3dc07e597806/thumb.jpg",
    },
    {
        id: 2,
        name: "Snacks",
        description: "Chips, cookies, and quick bites.Chips, cookies, and quick bites.Chips, cookies, and quick bites.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Desserts",
        description: "Cakes, ice creams, and sweet treats.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Main Dishes",
        description: "Delicious main courses for all tastes.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Salads",
        description: "Fresh and healthy salads.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "Soups",
        description: "Warm and comforting soups.",
        image: "https://via.placeholder.com/150",
    },

];


const AdminCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editCategory, setEditCategory] = useState(null);

    const handleModalToggle = (category) => {
        setIsOpen(!isOpen);
        setEditCategory(category)
    };

  

    return (
        <div className='w-full h-[100vh] flex justify-center pb-[100px] pt-[50px]'>
            <div className="p-4 bg-gray-100 w-full ">
                <div className='flex justify-between items-center max-[768px]:flex-col max-[768px]:items-start'>
                    <p className="text-2xl font-bold text-gray-800 mb-6">Category List</p>
                    <div className="mb-6">
                        <select
                            id="filter"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home Appliances</option>
                            <option value="sports">Sports</option>
                            <option value="books">Books</option>
                        </select>
                    </div>
                    <button
                        onClick={handleModalToggle}
                        className="mb-6 px-6 py-3 text-[14px] bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                        Add Category
                        <i className="fa-solid fa-plus pl-[10px]"></i>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 overflow-y-scroll h-full pb-[70px]">
                    {categories.map((category, index) => (
                        <AdminCategoryList
                            handleModalToggle={handleModalToggle}
                            key={index}
                            category={category}
                        />
                    ))}
                </div>
            </div>
            <CategoryModal
                editCategory={editCategory}
                handleModalToggle={handleModalToggle}
                isOpen={isOpen}
            />
        </div>
    )
}

export default AdminCategory