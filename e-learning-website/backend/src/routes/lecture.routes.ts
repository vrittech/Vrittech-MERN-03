import express from 'express';
import { upload } from '../middlewares/multer.middleware';
import { authorize } from '../middlewares/auth.middleware';
import { createLecture } from '../controllers/lecture.controller';


const router = express.Router();

router.post('/', upload.single('video'), createLecture)

export default router;