import React, { createContext, useState, useContext, useEffect } from 'react'
export const ContextAdmin = createContext()
import { ContextUser } from './CheckUserContext'
import { toast } from 'react-toastify'
const AdminContext = ({ children }) => {
    const { apiClient } = useContext(ContextUser)
    // start Category
    const [categoryLoading, setCategoryLoading] = useState(false)

    const [category, setcategory] = useState([])
    const getCategory = async () => {
        try {
            const response = await apiClient.get('/Category/GetCategory')
            setcategory(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const [newCategory, setNewCategory] = useState()
    const newCategoryFunc = async (category) => {
        setCategoryLoading(true)
        try {
            const data = new FormData()
            data.append('name', category.name)
            data.append('imageCategory', category.imageFile)

            const response = await apiClient.post('/Category/AddCategory', data)
            setNewCategory(response.data)
            toast.success(response.data.message)
            setCategoryLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            setCategoryLoading(false)
        }
    }

    const [updateCategory, setUpdateCategory] = useState()
    const updateCategoryFunc = async (id, category) => {
        setCategoryLoading(true)
        try {
            const data = new FormData()
            data.append('name', category.name)
            data.append('imageCategory', category.imageFile)
            const response = await apiClient.put(`/Category/UpdateCategory/${id}`, data)
            setUpdateCategory(response.data.category)
            toast.success(response.data.message)
            setCategoryLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            setCategoryLoading(false)
        }
    }

    const [deleteCategory, setDeleteCategory] = useState()
    const deleteCategoryFunc = async (id) => {
        setCategoryLoading(true)
        try {
            const response = await apiClient.delete(`/Category/DeleteCategory/${id}`)
            setDeleteCategory(response.data)
            toast.success(response.data.message)
            setCategoryLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            setCategoryLoading(false)
        }
    }

    useEffect(() => {
        getCategory()
    }, [newCategory, deleteCategory, updateCategory])


    return (
        <ContextAdmin.Provider value={{
            categoryLoading,
            category,
            newCategoryFunc,
            deleteCategoryFunc,
            updateCategoryFunc
        }}>
            {
                children
            }
        </ContextAdmin.Provider>
    )
}

export default AdminContext