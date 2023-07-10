import express from 'express';
import { createCourses, deleteCourse, getCourses } from '../controllers/courses.controller';
import { upload } from '../middlewares/multer.middleware';



const router = express.Router();

router.post('/', upload.array('photo', 12), createCourses)
router.get('/', getCourses)
router.delete('/:id', deleteCourse)

export default router;