import Bootcamp from "../models/bootcamp.model.js";
import Course from "../models/courses.model.js";

export const addCourse = async (req, res) => {
   try {
      //find whether this bootcamp exists- 648fc6017b23ac9d024816e1 : req.params/req.body
      const user = req.user._id;
      const { bootcamp } = req.body;

      const bootcampC = await Bootcamp.findOne({ _id: bootcamp });
      if (bootcampC) {
         req.body.user = user;
         const course = new Course(req.body);

         await course.save();

         return res.status(200).json({
            status: true,
            message: 'Course added successfully '
         })
      } else {
         return res.status(400).json({
            status: false,
            message: 'Bootcamp not found'
         })
      }
      //append req.body.user -> req.user._id
      //append req.body.bootcamp -> req.params.bootcamp

   } catch (error) {
      console.log(error);
   }
}