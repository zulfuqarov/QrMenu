import express from 'express';
import Auth from './routes/Auth.js';
import Category from './routes/Category.js';
import Product from './routes/Product.js';
const router = express.Router();

router.use('/Auth', Auth)
router.use('/Category', Category)
router.use("/Product", Product)
export default router;