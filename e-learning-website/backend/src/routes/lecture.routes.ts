import express from 'express';
import { upload } from '../middlewares/multer.middleware';
import { authorize } from '../middlewares/auth.middleware';
import { createLecture, editLecture, getLecture } from '../controllers/lecture.controller';


const router = express.Router();

router.post('/', upload.single('video'), createLecture)
router.get('/', getLecture);
router.patch('/:id', upload.single('video'), editLecture);

export default router;