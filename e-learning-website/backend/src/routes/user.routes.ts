import express from 'express';
import { signin, signup } from '../controllers/users.controller';

const router = express.Router();

router.post('/register', signup);
router.post('/login', signin);

export default router;