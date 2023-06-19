import express from 'express';
import { addCourse } from '../controllers/courses.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hello Course')
})

router.post('/:bootcamp', addCourse)

export default router;