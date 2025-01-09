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

    // start Prodcut
    const [productLoading, setProductLoading] = useState(false)

    const [product, setProduct] = useState([])
    const getProduct = async () => {
        try {
            const response = await apiClient.get('/Product/GetProduct')
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const [newProduct, setNewProduct] = useState()
    const newProductFunc = async (product) => {
        setProductLoading(true)
        try {
            const data = new FormData()
            data.append('name', product.name)
            data.append('price', product.price)
            data.append('category', product.category_id)
            data.append('description', product.description)
            data.append('imageProduct', product.imageFile)
            const response = await apiClient.post('/Product/AddProduct', data)
            setNewProduct(response.data)
            toast.success(response.data.message)
            setProductLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            setProductLoading(false)
        }
    }

    const [updateProduct, setUpdateProduct] = useState()
    const updateProductFunc = async (id, product) => {
        setProductLoading(true)
        try {
            const data = new FormData()
            data.append('name', product.name)
            data.append('price', product.price)
            data.append('category', product.category_id)
            data.append('description', product.description)
            data.append('imageProduct', product.imageFile)
            const response = await apiClient.put(`/Product/UpdateProduct/${id}`, data)
            setUpdateProduct(response.data.product)
            toast.success(response.data.message)
            setProductLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            setProductLoading(false)
        }
    }

    const [deleteProduct, setDeleteProduct] = useState()
    const deleteProductFunc = async (id) => {
        setProductLoading(true)
        try {
            const response = await apiClient.delete(`/Product/DeleteProduct/${id}`)
            setDeleteProduct(response.data)
            toast.success(response.data.message)
            setProductLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
            setProductLoading(false)
        }
    }

    const [getProductByCategoryLoading, setGetProductByCategoryLoading] = useState(true)
    const [getProductByCategory, setGetProductByCategory] = useState([])
    const getProductByCategoryFunc = async (name) => {
        try {
            const response = await apiClient.get(`/Product/GetProduct/${name}`)
            setGetProductByCategory(response.data)
            setGetProductByCategoryLoading(false)
        } catch (error) {
            console.log(error)
            setGetProductByCategory([])
            setGetProductByCategoryLoading(false)
        }
    }


    // header Img change Start
    const [headerImg, setheaderImg] = useState('')
    const changeHeaderImgFunc = (imgUrl) => {
        setheaderImg(imgUrl)
    }




    useEffect(() => {
        getCategory()
    }, [newCategory, deleteCategory, updateCategory])

    useEffect(() => {
        getProduct()
    }, [newProduct, deleteProduct, updateProduct])

    return (
        <ContextAdmin.Provider value={{
            // category start
            categoryLoading,
            category,
            newCategoryFunc,
            deleteCategoryFunc,
            updateCategoryFunc,
            // product start
            productLoading,
            product,
            newProductFunc,
            updateProductFunc,
            deleteProductFunc,
            getProductByCategoryFunc,
            getProductByCategory,
            getProductByCategoryLoading,
            setGetProductByCategoryLoading,
            // header img change
            changeHeaderImgFunc,
            headerImg

        }}>
            {
                children
            }
        </ContextAdmin.Provider>
    )
}

export default AdminContext