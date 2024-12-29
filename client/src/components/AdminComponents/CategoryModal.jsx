import React, { useState, useEffect } from 'react'

const CategoryModal = ({ isOpen, handleModalToggle, editCategory }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    useEffect(() => {
        if (editCategory && editCategory.image) {
            setSelectedImage(editCategory.image);
        }else{
            setSelectedImage(null);
        }
    }, [editCategory]);

    return (
        isOpen &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Add New Category</h2>

                {/* Category Name Input */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name
                </label>
                <input
                    type="text"
                    placeholder="Enter category name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

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

export default CategoryModal