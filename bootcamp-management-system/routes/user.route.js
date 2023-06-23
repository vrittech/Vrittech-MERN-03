import express from 'express';
import { forgotPassword, loginUser, register, resetPassword } from '../controllers/user.controller.js';
import { authMiddleware, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a user.
 *     tags: [User]
 *     requestBody:
 *      content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             name: 
 *               type: string 
 *             email: 
 *               type: string 
 *             password: 
 *               type: string 
 *           example:
 *             name: Nirajan Kunwor 
 *             email: nk@gmail.com
 *             password: Test1234
 *     responses:
 *       200:
 *         description: User Created Successfully
 *       400:
 *         description: User not found
*/
router.post('/register', register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user.
 *     tags: [User]
 *     requestBody:
 *      content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             email: 
 *               type: string 
 *             password: 
 *               type: string 
 *           example:
 *             email: test@yahoo.com
 *             password: Hello1234
 *     responses:
 *       200:
 *         description: User login Successfully
 *       400:
 *         description: Invalid email or password
*/
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
router.put('/updatedetails', authMiddleware, (req, res) => {
   // const updatedPass = await User.findOneAndUpdate({
   //    _id: user._id
   // }, {
   //    $set: {
   //       name:req.body.name,
   //       email:req.body.email
   //    }
   // }, {
   //    new: true
   // })
})
router.patch('/updatePassword', authMiddleware, (req, res) => {
   const oldPassword = req.body.oldPassword;

   const matchedPassword = user.matchPassword(oldPassword);
   const newPassword = hashPassword(req.body.newPassword);
   //hash password hashPassword(newPassword)
   // const updatedPass = await User.findOneAndUpdate({
   //    _id: user._id
   // }, {
   //    $set: {
   //       password:newPassword
   //    }
   // }, {
   //    new: true
   // })


})

router.post('/forgotpassword', forgotPassword)
router.put('/resetpassword/:resettoken', resetPassword)

//admin priviledge
router.get('/users', authMiddleware, authorize('admin'), (req, res) => {
   // res.send(find())
   res.send('I am a admin user. I can view all users. Call find method here')
})
router.post('/users', authMiddleware, authorize('admin'), (req, res) => {
   // res.send(find())
   res.send('I am a admin user. I can create new  users. Call save or create User.create() here')
})

router.patch('/users/:id', authMiddleware, authorize('admin'), (req, res) => {
   // res.send(find())
   res.send('I am a admin user. I can  edit  users. Call set method findOneAndUpdate here')
})

router.delete('/users/:id', authMiddleware, authorize('admin'), (req, res) => {
   // res.send(find())
   res.send('I am a admin user. I can delete new  users. Call findOneAndDelete here')
})

//Docker
//Multer
//JEST


export default router;