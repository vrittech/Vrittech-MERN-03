import express from 'express';
import authRouter from './auth.routes';
import userRouter from './user.routes'
import courseRouter from './courses.routes'
import { authMiddleware } from '../middlewares/auth.middleware';


const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/courses', courseRouter)

export default router;