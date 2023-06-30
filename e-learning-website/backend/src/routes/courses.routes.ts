import express from 'express';
import { createCourses } from '../controllers/courses.controller';

const router = express.Router();

router.post('/', createCourses)

export default router;