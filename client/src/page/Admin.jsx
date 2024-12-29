import React from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import Sidebar from '../components/AdminComponents/Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='h-full flex '>
            {/* <HeaderAdmin /> */}
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Admin