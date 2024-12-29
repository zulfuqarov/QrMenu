import React from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import { Link } from 'react-router-dom'

const Sign = () => {
    return (
        <div>

            <HeaderAdmin />

            <div className=" pt-[60px] flex items-center justify-center bg-gray-100 pb-[100px]">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="mr-2" /> Remember me
                            </label>
                            <Link
                                to="/Admin"
                                className="text-sm text-orange-500 hover:underline">Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
                        >
                            Sign In
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sign
