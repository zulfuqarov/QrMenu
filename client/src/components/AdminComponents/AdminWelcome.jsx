import React from 'react'
import { motion } from "framer-motion";

const AdminWelcome = () => {
    return (
        <div className="flex items-center justify-center  w-full">
            <motion.div
                className="text-4xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                Welcome to Admin Panel
            </motion.div>
        </div>
    )
}

export default AdminWelcome