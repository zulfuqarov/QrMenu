import React from 'react'
import FoodCadr from '../components/FoodCadr'

const AdminMenu = () => {
    return (
        <div className='w-full flex justify-center pb-[100px] pt-[50px]'>
            <div className='w-full px-[30px] max-[768px]:px-[20px]'>
                <div className='grid  grid-cols-3 gap-4 max-[1250px]:grid-cols-2 max-[768px]:grid-cols-1  max-[768px]:px-[15px]'>
                    <FoodCadr />
                    <FoodCadr />
                    <FoodCadr />
                    <FoodCadr />
                    <FoodCadr />
                    <FoodCadr />
                </div>
            </div>
        </div>
    )
}

export default AdminMenu