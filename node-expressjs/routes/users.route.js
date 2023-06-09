import express from 'express';
import { registerUser, loginUser } from '../controller/users.controller.js';

const router = express.Router();

//put/patch

//CREATE
router.post('/register', registerUser);
router.post('/login', loginUser);


export default router;