import express from 'express';
import cloudinary from 'cloudinary';
import { CheckToken } from '../middleware/CkeckToken.js';
import Product from '../model/ProductModal.js';

const router = express.Router();

router.get("/GetProduct", async (req, res) => {
    try {
        const products = await Product.find({}).populate("category")
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
})

router.use(CheckToken);
router.post("/AddProduct", async (req, res) => {
    const { name, price, category, description } = req.body;
    let imageProduct = req.files && req.files.imageProduct;
    let imageId = null;

    if (!name || !price || !category) {
        return res.status(422).json({ error: "Zəhmət olmasa, ad, qiymət və kateqoriya seçin." });
    }

    if (imageProduct) {
        try {
            const uploadImg = await cloudinary.uploader.upload(
                imageProduct.tempFilePath,
                {
                    use_filename: true,
                    folder: "Home",
                }
            );

            imageProduct = uploadImg.url;
            imageId = uploadImg.public_id;
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Şəkil yüklənərkən xəta baş verdi" })
        }
    }

    try {

        const newProduct = new Product({
            name,
            price,
            category,
            description,
            image: imageProduct ? imageProduct : undefined,
            imageId
        })

        await newProduct.save()

        res.status(201).json({ message: "Məhsul əlavə edildi", newProduct })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Məhsul əlavə edilərkən xəta baş verdi" })
    }
})

export default router