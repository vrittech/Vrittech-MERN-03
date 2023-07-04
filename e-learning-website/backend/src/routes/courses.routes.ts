import express from 'express';
import { createCourses } from '../controllers/courses.controller';
import { upload } from '../middlewares/multer.middleware';
import { authorize } from '../middlewares/auth.middleware';


const router = express.Router();

router.post('/', upload.array('photo', 12), createCourses)

export default router;