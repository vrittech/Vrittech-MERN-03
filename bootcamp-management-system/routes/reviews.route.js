import express from 'express';
import { addReviews } from '../controllers/reviews.controller.js';
import { authMiddleware, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hello Reviews')
})

router.post('/', authMiddleware, authorize('user,admin,publisher'), addReviews);

router.patch('/:id?bootcampId=648fc6017b23ac9d024816e1', (req, res) => {
   const review = review.findOne('6493b0914898187555c27526');

   bootcamp => {
      user: ''
   }

   // review{
   //    title,
   //    description, rating
   // }


});


export default router;