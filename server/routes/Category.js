import express from 'express';
import { CheckToken } from '../middleware/CkeckToken.js';

const router = express.Router();
router.use(CheckToken);

router.get("/", (req, res) => {
    res.send("Category Page")
})


export default router;