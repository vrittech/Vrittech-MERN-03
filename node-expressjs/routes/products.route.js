import express from 'express';
import { getProducts, postProducts, getProductById, deleteProduct } from '../controller/products.controller.js';

const router = express.Router();

router.get('', getProducts);

router.get('/:prodid', getProductById);

router.delete('/:prodid', deleteProduct);

router.post('', postProducts);

export default router;