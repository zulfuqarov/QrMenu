import express from 'express';
import Auth from './routes/Auth.js';
import Category from './routes/Category.js';

const router = express.Router();

router.use('/Auth', Auth)
router.use('/Category', Category)
export default router;