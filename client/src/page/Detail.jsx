import React from 'react'
import FoodDetail from '../components/FoodDetail'

const Detail = () => {
    return (
        <div className='pb-[100px]'>
            <div className='px-[20px]'>
                <p className='pt-[30px]  text-[28px] text-black font-medium'>
                    Category Name
                </p>
                <div className="max-w-md mx-auto pt-[10px]">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-white border border-none rounded-lg bg-gray-200 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500"
                            placeholder="Search Mockups, Logos..."
                            required=""
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2 bg-gray-800 hover:bg-gray-700   font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Search
                        </button>
                    </div>
                </div>

            </div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 gap-4 max-[991px]:grid-cols-2 max-[768px]:grid-cols-1 pt-[30px] '>
                    <FoodDetail />
                    <FoodDetail />
                    <FoodDetail />
                    <FoodDetail />
                    <FoodDetail />
                </div>
            </div>
        </div>
    )
}

export default Detail