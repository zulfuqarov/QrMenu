import React, { useState } from 'react'
import AdminProductList from '../components/AdminComponents/AdminProductList'
import ProductModal from '../components/AdminComponents/ProductModal';

const products = [
    {
        id: 1,
        name: "Chocolate Cake",
        description: "Delicious dark chocolate cake with creamy frosting.",
        price: 15.99,
        image: "https://avatars.mds.yandex.net/i?id=f037d4e72309c1f81e703f8307f30433_l-5648503-images-thumbs&n=13",
    },
    {
        id: 2,
        name: "Cheeseburger",
        description: "Juicy cheeseburger with lettuce, tomato, and pickles.",
        price: 8.49,
        image: "https://avatars.mds.yandex.net/i?id=f037d4e72309c1f81e703f8307f30433_l-5648503-images-thumbs&n=13",
    },
    {
        id: 3,
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh basil and mozzarella.",
        price: 12.99,
        image: "https://avatars.mds.yandex.net/i?id=f037d4e72309c1f81e703f8307f30433_l-5648503-images-thumbs&n=13",
    },
    {
        id: 4,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing and croutons.",
        price: 7.99,
        image: "https://avatars.mds.yandex.net/i?id=f037d4e72309c1f81e703f8307f30433_l-5648503-images-thumbs&n=13",
    },
    {
        id: 5,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with chocolate syrup and a cherry on top.",
        price: 6.49,
        image: "https://avatars.mds.yandex.net/i?id=f037d4e72309c1f81e703f8307f30433_l-5648503-images-thumbs&n=13",
    },
];


const AdminProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editProduct, seteditProduct] = useState(null);

    const handleModalToggle = (product) => {
        setIsOpen(!isOpen);
        seteditProduct(product);
    };

    return (
        <div className='w-full h-[100vh] flex justify-center pb-[100px] pt-[50px]'>
            <div className="p-4 bg-gray-100 w-full ">
                <div className='flex justify-between items-center max-[768px]:flex-col max-[768px]:items-start'>
                    <p className="text-2xl font-bold text-gray-800 mb-6">Product List</p>
                    <div className="mb-6">
                        <select
                            id="filter"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="">All Product</option>
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
                        Add Product
                        <i className="fa-solid fa-plus pl-[10px]"></i>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-scroll h-full pb-[70px]">
                    {products.map((product, index) => (
                        <AdminProductList
                            handleModalToggle={handleModalToggle}
                            key={index}
                            product={product}
                        />
                    ))}

                </div>
            </div>
            <ProductModal
                editProduct={editProduct}
                handleModalToggle={handleModalToggle}
                isOpen={isOpen}
            />
        </div>
    )
}

export default AdminProduct
