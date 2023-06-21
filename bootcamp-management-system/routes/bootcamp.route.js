import express from 'express';
import { addBootcamp, getBootcamp, deleteBootcamp, updateBootcamp } from '../controllers/bootcamp.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { authMiddleware, authorize } from '../middlewares/auth.middleware.js';
import { filteredResults } from '../middlewares/filteredResults.middleware.js';
import Bootcamp from '../models/bootcamp.model.js';

const router = express.Router();

router.get('/', authMiddleware, filteredResults(Bootcamp), getBootcamp)

router.post('/', authMiddleware, authorize('publisher', 'admin'), upload.single('photo'), addBootcamp);

router.patch('/:id', authMiddleware, authorize('publisher', 'admin'), upload.single('photo'), updateBootcamp);

router.delete('/:id', authMiddleware, authorize('publisher', 'admin'), deleteBootcamp);

export default router;