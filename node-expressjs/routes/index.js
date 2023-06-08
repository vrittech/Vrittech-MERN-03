import express from 'express';
import userRoutes from './users.route.js'
import productRoutes from './products.route.js'

const router = express.Router();

router.use('/users', userRoutes)

router.use('/products', productRoutes)

export default router;