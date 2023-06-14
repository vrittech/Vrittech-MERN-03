import express from 'express';
import { getProducts, postProducts, getProductById, deleteProduct } from '../controller/products.controller.js';
import checkAdmin from '../middleware/checkAdmin.middleware.js';

const router = express.Router();

router.get('', getProducts);

router.get('/:prodid', getProductById);

router.delete('/:prodid', checkAdmin, deleteProduct);

router.post('', checkAdmin, postProducts);

export default router;