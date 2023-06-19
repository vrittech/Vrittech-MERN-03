import express from 'express';
import { addBootcamp } from '../controllers/bootcamp.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { authMiddleware, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hello Bootcamp')
})

router.post('/', authMiddleware, authorize('publisher', 'admin'), upload.single('photo'), addBootcamp);

export default router;