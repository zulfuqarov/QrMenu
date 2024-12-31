import React, { useContext, useEffect, useState } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import Sidebar from '../components/AdminComponents/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { ContextUser } from '../context/CheckUserContext';

const Admin = () => {
    const { hasJwtToken } = useContext(ContextUser)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (hasJwtToken === false) {
            navigate("/Sign"); 
        } else if (hasJwtToken !== null) {
            setLoading(false); 
        }
    }, [hasJwtToken]);

    if (loading) {
        return <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-t-transparent border-orange-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
            </div>
        </div>;
    }

    return (
        <div className='h-full flex '>
            {/* <HeaderAdmin /> */}
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Admin;
