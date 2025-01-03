import { useContext, useEffect, useState } from "react";
import React from 'react'
import { ContextAdmin } from "../../context/AdminContext";
import Loading from "../Loading";

const ProductModal = ({ isOpen, handleModalToggle, editProduct, setIsOpen }) => {
    const { category, newProductFunc, productLoading } = useContext(ContextAdmin)
    const [selectedImage, setSelectedImage] = useState({
        imageUrl: null,
        imageFile: null,
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage({
                imageUrl,
                imageFile: file,
            });
        }
    };

    const [productInput, setProductInput] = useState({
        name: "",
        description: "",
        price: "",
        category_id: "",
    })

    const handleProductInput = (e) => {
        setProductInput({
            ...productInput,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editProduct) {
            setProductInput({
                name: editProduct.name || "",
                description: editProduct.description || "",
                price: editProduct.price || "",
                category_id: editProduct.category && editProduct.category._id || "",
            })
            setSelectedImage({
                imageUrl: editProduct.image || null,
                imageFile: null,
            })
        } else {
            setProductInput({
                name: "",
                description: "",
                price: "",
                category_id: "",
            })
            setSelectedImage({
                imageUrl: null,
                imageFile: null,
            })
        }
    }, [editProduct])

    return (
        isOpen &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">{editProduct ? 'Update Product' : 'Add New Product'} </h2>

                {/* Product Name Input */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                </label>
                <input
                    name="name"
                    value={productInput.name}
                    onChange={handleProductInput}
                    type="text"
                    placeholder="Enter product name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                {/* Product Description */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <textarea
                    name="description"
                    value={productInput.description}
                    onChange={handleProductInput}
                    placeholder="Enter product description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                    rows="4"
                ></textarea>

                {/* Product Price */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                </label>
                <input
                    name="price"
                    value={productInput.price}
                    onChange={handleProductInput}
                    type="number"
                    placeholder="Enter product price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                {/* Category Dropdown */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Category
                </label>
                <select
                    value={productInput.category_id}
                    onChange={handleProductInput}
                    name="category_id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                    <option value="" disabled>
                        Kategory seçin
                    </option>
                    {category &&
                        category.map((item, index) => (
                            <option key={index} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                </select>

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
                        editProduct ? <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                            Edit
                        </button> :
                            <button
                                onClick={async () => {
                                    await newProductFunc({
                                        name: productInput.name,
                                        description: productInput.description,
                                        price: productInput.price,
                                        category_id: productInput.category_id,
                                        imageFile: selectedImage.imageFile
                                    })
                                    setProductInput({
                                        name: "",
                                        description: "",
                                        price: "",
                                        category_id: "",
                                    })
                                    setSelectedImage({
                                        imageUrl: null,
                                        imageFile: null,
                                    })
                                    setIsOpen(false)
                                }}
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                                Save
                            </button>
                    }

                </div>
            </div>

            {productLoading &&
                <Loading />
            }

        </div>
    )
}

export default ProductModal