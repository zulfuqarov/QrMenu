import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const FoodCadr = () => {

    return (
        <Link to="/Details" className="h-[200px] w-full relative bg-[url('https://avatars.mds.yandex.net/i?id=1465df270e27b113008a65b08701300c_l-5486213-images-thumbs&n=13')] bg-no-repeat bg-cover bg-center rounded">
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded"></div>

            <div className='w-full absolute z-10 h-full flex flex-col justify-end items-center text-center text-white  pb-[10px]'>
                <p className="text-white text-[18px] font-medium text-lg">Kompanyia</p>
            </div>
        </Link>
    )
}

export default FoodCadr