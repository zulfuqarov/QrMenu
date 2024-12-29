import React from 'react'

const FoodDetail = () => {
    return (
        <div className="w-full flex justify-between items-center space-x-1 p-[15px] bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col justify-between h-full  w-[100%]">
                <div className="mb-2">
                    <p className="text-lg font-semibold text-gray-800">Toyuq Şorbası</p>
                </div>
                <div className="mb-2">
                    <p className="text-[14px] text-gray-600">
                        File toyuq, Soğan, Kartof, Bibər rəngli, Kök, Yağ qarğıdalı, Duz, İstiot, Toz bulyonu, Kartof
                    </p>
                </div>
                <div>
                    <p className="text-lg font-bold text-orange-600">5.00 ₼</p>
                </div>
            </div>
            <div className="w-[150px] h-[85px] flex-shrink-0">
                <img className="w-full h-full object-cover rounded-md" src="https://cdn.clopos.com/hollywood/54f6d4d7-0f8e-4cb0-bc94-3dc07e597806/thumb.jpg" alt="Toyuq Şorbası" />
            </div>
        </div>

    )
}

export default FoodDetail
