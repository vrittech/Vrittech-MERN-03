import Bootcamp from "../models/bootcamp.model.js";
import Course from "../models/courses.model.js";
import Review from "../models/reviews.model.js";

export const addReviews = async (req, res) => {
   //COurse -> Reviews
   //Bootcamp -> Course -> Reviews
   try {
      //find whether this bootcamp exists- 648fc6017b23ac9d024816e1 : req.params/req.body
      const user = req.user._id;
      const { bootcamp, course } = req.body;
      req.body.user = user;

      if (!bootcamp && !course) {
         return res.status(400).json({
            status: false,
            message: 'Either bootcamp or course is required'
         })
      }

      if (course) {
         const crse = await Course.findOne({ _id: course });

         if (crse) {
            const review = await postReview(req.body);
            if (review) {
               return res.status(200).json({
                  status: true,
                  message: 'Review added for course'
               })
            }

         } else {
            return res.status(400).json({
               status: false,
               message: 'Courses not found'
            })
         }
      }

      if (bootcamp) {
         const bcmp = await Bootcamp.findOne({ _id: bootcamp });

         if (bcmp) {
            const review = await postReview(req.body);

            if (review) {
               return res.status(200).json({
                  status: true,
                  message: 'Review added for bootcamp'
               })
            }
         } else {
            return res.status(400).json({
               status: false,
               message: 'Boootcamp not found'
            })
         }
      }



      //append req.body.user -> req.user._id
      //append req.body.bootcamp -> req.params.bootcamp

   } catch (error) {
      console.log(error);
   }
}

const postReview = async (data) => {
   try {

      const review = new Review(data);

      await review.save();

      return review;
   } catch (error) {
      console.log(error);
   }

}