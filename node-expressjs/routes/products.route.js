import express from 'express';
import { getProducts, postProducts } from '../controller/products.controller.js';

const router = express.Router();

router.get('', getProducts);
router.post('', postProducts);

export default router;