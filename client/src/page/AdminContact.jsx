import React from 'react';

const AdminContact = () => {
    return (
        <div className='pt-[50px] w-full h-[100vh] flex justify-center items-center'>
            <div className='w-[400px] p-6 bg-white rounded-lg shadow-lg'>
                <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    Əlaqə Məlumatları
                </h2>
                {/* Wi-Fi Adı */}
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wi-Fi Adı
                    </label>
                    <input
                        name="wifiName"
                        type="text"
                        placeholder="Wi-Fi adını daxil edin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                </div>
                {/* Wi-Fi Şifrə */}
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wi-Fi Şifrə
                    </label>
                    <input
                        name="wifiPassword"
                        type="password"
                        placeholder="Wi-Fi şifrəsini daxil edin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                </div>
                {/* Adres */}
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ünvan
                    </label>
                    <input
                        name="address"
                        type="text"
                        placeholder="Ünvanı daxil edin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                </div>
                {/* Telefon */}
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                    </label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Telefon nömrəsini daxil edin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Məlumatları Yadda Saxla
                </button>
            </div>
        </div>
    );
};

export default AdminContact;
