import React, { useState, useEffect, useContext } from 'react'
import { ContextAdmin } from '../../context/AdminContext';

const CategoryModal = ({ isOpen, setIsOpen, handleModalToggle, editCategory }) => {
    const { newCategoryFunc, categoryLoading } = useContext(ContextAdmin)
    // change image catgeory 
    const [selectedImage, setSelectedImage] = useState({
        imageUrl: null,
        imageFile: null,
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage({
                imageUrl,
                imageFile: file,
            });
        }
    };

    // change input category
    const [categoryInput, setCategoryInput] = useState('')
    const handeleChangeInput = (e) => {
        setCategoryInput(e.target.value)
    }


    useEffect(() => {
        if (editCategory) {
            setCategoryInput(editCategory.name || '');
            setSelectedImage({
                imageUrl: editCategory.image || null,
                imageFile: null,
            });
        } else {
            setCategoryInput('')
            setSelectedImage({
                imageUrl: null,
                imageFile: null,
            });
        }
    }, [editCategory]);


    return (
        isOpen &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">{editCategory ? 'Update Category' : 'Add New Category'} </h2>

                {/* Category Name Input */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name
                </label>
                <input
                    onChange={handeleChangeInput}
                    value={categoryInput}
                    type="text"
                    placeholder="Enter category name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                {/* Image Upload Section */}
                <label
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition duration-300"
                >
                    {selectedImage.imageUrl ? (
                        <img
                            src={selectedImage.imageUrl}
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
                    {
                        editCategory ? <button

                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                            Update
                        </button> : <button
                            onClick={async () => {
                                await newCategoryFunc({
                                    name: categoryInput,
                                    imageFile: selectedImage.imageFile,
                                })
                                setIsOpen(false)
                            }}
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                            Save
                        </button>
                    }
                </div>
            </div>

            {
                categoryLoading &&

                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm"></div>
                    <div className="relative flex justify-center items-center">
                        <div className="w-16 h-16 border-4 border-t-4 border-orange-500 border-solid rounded-full animate-ping"></div>
                    </div>
                </div>
            }



        </div>
    )
}

export default CategoryModal