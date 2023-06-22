import express from 'express';
import bootcampRouter from './bootcamp.route.js';
import courseRouter from './course.route.js';
import userRouter from './user.route.js';
import reviewsRouter from './reviews.route.js';
import swaggerRouter from './swagger.route.js';

const router = express.Router();

router.use('/bootcamps', bootcampRouter);
router.use('/courses', courseRouter);
router.use('/users', userRouter);
router.use('/swagger', swaggerRouter);
router.use('/reviews', reviewsRouter);

export default router;