import React from 'react'

const AdminCategoryList = ({ category, handleModalToggle }) => {
    return (
        <div
            key={category.id}
            className="flex items-center max-[768px]:flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
        >

            <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border border-gray-300">
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 ml-4 max-[768px]:py-[20px]">
                <h2 className="text-lg font-semibold text-gray-800">
                    {category.name}
                </h2>
            </div>

            <div className="flex space-x-2">
                <button
                    onClick={() => handleModalToggle(category)}
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                    Edit
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>

    )
}

export default AdminCategoryList