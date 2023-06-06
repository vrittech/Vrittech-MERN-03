import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
   const users = ["Raaz", "Samrat", "Roshan"];

   res.status(200).json({
      status: true,
      data: users,
      message: "USer fetched successfully"
   })
})



router.get('/new', (req, res) => {
   const users = ["Raaz", "Samrat", "Roshan"];
   users.push('alisha')

   res.status(200).json({
      status: true,
      data: users,
      message: "User fetched successfully"
   })
})

export default router;