import { useState, useEffect } from "react";
import React from 'react'
import { motion } from "framer-motion";

const AdminWelcome = () => {
    const [adminName, setadminName] = useState('')
    useEffect(() => {
        setadminName(localStorage.getItem('userName'))
    }, [])

    return (
        <div className="flex items-center justify-center  w-full">
            <motion.div
                className="text-4xl font-bold text-gray-800 text-center "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                Welcome to Admin Panel <br /> <span className="text-orange-500">{adminName}</span>
            </motion.div>
        </div>
    )
}

export default AdminWelcome
