import express from 'express';
import { CheckToken } from '../middleware/CkeckToken.js';
import Category from '../model/CategoryModal.js';
import cloudinary from "cloudinary";
const router = express.Router();




router.use(CheckToken);

router.post("/AddCategory", async (req, res) => {
    const { name } = req.body;
    let imageCategory = req.file && req.file.imageCategory;

    if (!name) {
        return res.status(422).json({ error: "Zəhmət olmasa, bir ad daxil edin" });
    }

    if (imageCategory) {
        try {
            const uploadImg = await cloudinary.uploader.upload(
                imageCategory.tempFilePath,
                {
                    use_filename: true,
                    folder: "Home",
                }
            );
            imageCategory = uploadImg.url;
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Şəkil yüklənərkən xəta baş verdi" });
        }
    }

    try {
        const newCategory = new Category({
            name,
            image: imageCategory,
        });
        await newCategory.save();
        res.status(201).json({ message: "Kateqoriya əlavə edildi", newCategory });
    } catch (error) {
        console.log(error)
    }
})

router.put("/UpdateCategory/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    let imageCategory = req.file && req.file.imageCategory;

    let updateCategory = {};

    if (name) {
        updateCategory.name = name;
    } else {
        return res.status(422).json({ error: "Zəhmət olmasa, bir ad daxil edin" });
    }
    if (imageCategory) {
        try {
            const uploadImg = await cloudinary.uploader.upload(
                imageCategory.tempFilePath,
                {
                    use_filename: true,
                    folder: "Home",
                }
            );
            imageCategory = uploadImg.url;
            updateCategory.image = imageCategory;
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Şəkil yüklənərkən xəta baş verdi" });
        }
    }


    try {

        const category = await Category.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                $set: updateCategory
            },
            { new: true }
        );

        if (!category) {
            return res.status(404).json({ message: "Kateqoriya tapılmadı" });
        }

        res.status(200).json(category);

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server xətası" });
    }


})


export default router;