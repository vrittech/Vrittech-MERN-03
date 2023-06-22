import express from 'express';
import { addCourse } from '../controllers/courses.controller.js';
import { authMiddleware, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hello Course')
})

router.post('/', authMiddleware, authorize('admin'), addCourse)

export default router;