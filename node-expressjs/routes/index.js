import express from 'express';
import userRoutes from './users.route.js'

const router = express.Router();



router.get('/', (request, response) => {
   const users = ["Raaz", "Samrat", "Roshan"];
   // response.render('index', {
   //    data: users
   // });
   response.send("Home page")
})

router.use('/users', userRoutes)

router.get('/products', (req, res) => {
   const products = ["routerle", "samsung", "mi"];

   res.status(200).json({
      status: true,
      data: products,
      message: "USer fetched successfully"
   })
})



export default router;