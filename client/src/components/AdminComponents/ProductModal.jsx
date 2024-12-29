import { useEffect, useState } from "react";
import React from 'react'

const ProductModal = ({ isOpen, handleModalToggle, editProduct }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    useEffect(() => {
        if (editProduct && editProduct.image) {
            setSelectedImage(editProduct.image)
        } else {
            setSelectedImage(null)
        }
    }, [editProduct])

    return (
        isOpen &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Add New Product</h2>

                {/* Product Name Input */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                </label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                {/* Product Description */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <textarea
                    placeholder="Enter product description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                    rows="4"
                ></textarea>

                {/* Product Price */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                </label>
                <input
                    type="number"
                    placeholder="Enter product price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                {/* Category Dropdown */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Category
                </label>
                <select
                    // value={""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                    <option value="" disabled>
                        Choose a category
                    </option>
                    <option >
                        Electronics
                    </option>
                    <option >
                        Electronics
                    </option>
                    <option >
                        Electronics
                    </option>
                    <option >
                        Electronics
                    </option>
                </select>

                {/* Image Upload Section */}
                <label
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition duration-300"
                >
                    {selectedImage ? (
                        <img
                            src={selectedImage}
                            alt="Uploaded Preview"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    ) : (
                        <div className="flex flex-col items-center text-gray-500">
                            <svg
                                className="w-10 h-10 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                ></path>
                            </svg>
                            <span>Click to upload an image</span>
                        </div>
                    )}
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                        onClick={handleModalToggle}
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal