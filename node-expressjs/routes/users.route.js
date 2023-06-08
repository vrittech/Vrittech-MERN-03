import express from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controller/users.controller.js';

const router = express.Router();

//CRUD
//READ

router.get('/', getUsers)

//put/patch

//CREATE
router.post('/', createUser);

//UPDATE
router.patch('/:id', updateUser)

//DELETE
router.delete('/:userId', deleteUser)

export default router;