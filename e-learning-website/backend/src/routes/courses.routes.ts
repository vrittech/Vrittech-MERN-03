import express from 'express';
import { createCourses } from '../controllers/courses.controller';
import { upload } from '../middlewares/multer.middleware';
import { authorize } from '../middlewares/auth.middleware';


const router = express.Router();

router.post('/', authorize('instructor', 'admin') as any, upload.single('photo'), createCourses)

export default router;