import React, { useContext, useState } from 'react'
import AdminProductList from '../components/AdminComponents/AdminProductList'
import ProductModal from '../components/AdminComponents/ProductModal';
import { ContextAdmin } from '../context/AdminContext';



const AdminProduct = () => {
    const { category, product } = useContext(ContextAdmin)
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
                            value={""}
                            id="filter"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="" disabled>Hamisi</option>
                            {
                                category &&
                                category.map((item, index) => (
                                    <option key={index} value={item._id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button
                        onClick={() => handleModalToggle(null)}
                        className="mb-6 px-6 py-3 text-[14px] bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                        Add Product
                        <i className="fa-solid fa-plus pl-[10px]"></i>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-full  pb-[70px]">
                    {
                        product &&
                        product.map((product, index) => (
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
                setIsOpen={setIsOpen}
            />
        </div>
    )
}

export default AdminProduct
