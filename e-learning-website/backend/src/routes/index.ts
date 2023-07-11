import express from 'express';
import authRouter from './auth.routes';
import userRouter from './user.routes'
import courseRouter from './courses.routes';
import lecureRouter from './lecture.routes';
import stripeRouter from './stripe.routes';
import { authMiddleware } from '../middlewares/auth.middleware';


const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/stripe', stripeRouter);
router.use('/courses', authMiddleware as any, courseRouter)
router.use('/lectures', authMiddleware as any, lecureRouter)

export default router;