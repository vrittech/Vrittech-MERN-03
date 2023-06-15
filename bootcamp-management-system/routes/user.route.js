import express from 'express';
import { forgotPassword, loginUser, register } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', loginUser);

//user logout
router.patch('/logout', authMiddleware, (req, res) => {
   //Bearer token
   //jwt update to undefined
})
//profile page
router.get('/me', authMiddleware, (req, res) => {
   //Bearer token
   //send auth token//get current user details from auth token and send a response to user
})
router.get('/updatedetails', (req, res) => {

})
router.get('/updatePassword', (req, res) => {

})
router.post('/forgotpassword', forgotPassword)
router.get('/resetpassword/:resettoken', (req, res) => {

})

export default router;