import cloudinary from "../config/cloudinary.config.js";
import Bootcamp from "../models/bootcamp.model.js";
import Course from "../models/courses.model.js";

export const getBootcamp = async (req, res) => {
   try {
      //Advanced Filtering
      res.status(200).json(res.filteredResults)
   } catch (error) {

   }
}


export const addBootcamp = async (req, res) => {
   try {
      let uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
      console.log(uploadedFile)
      const data = req.body;
      data.photo = uploadedFile.secure_url;
      data.photo_public_id = uploadedFile.public_id;
      data.user = req.user._id;

      // const bootcamp = await Bootcamp.create(data);

      const bootcamp = new Bootcamp(data);
      await bootcamp.save()

      res.status(200).json({
         status: true,
         message: 'Bootcamp created successfully',
         data: bootcamp
      })

   } catch (error) {
      console.log(error)
   }
}

export const updateBootcamp = async (req, res) => {
   try {
      const { id } = req.params;
      const { isImageUpdated } = req.body;
      const data = req.body;


      const bootcamp = await Bootcamp.findById(id);

      if (!bootcamp) {
         return res.status(400).json({
            status: false,
            message: 'No bootcamp found '
         })
      }
      //Check if the requested user is the owner
      if (req.user._id === bootcamp.user) {

         if (isImageUpdated) {
            await cloudinary.v2.uploader.destroy(bootcamp.photo_public_id);
            let uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
            data.photo = uploadedFile.secure_url;
            data.photo_public_id = uploadedFile.public_id;
         }

         const updatedBootcamp = await Bootcamp.findOneAndUpdate({ _id: id }, {
            $set: data
         }, {
            new: true
         })

         if (updatedBootcamp) {
            return res.status(200).json({
               status: true,
               message: 'Bootcamp updated successfully',
               data: updatedBootcamp
            })
         }
      } else {
         res.status(401).json({
            status: true,
            message: 'Not authorized'
         })
      }
   } catch (error) {
      console.log(error);
   }
}



export const deleteBootcamp = async (req, res) => {
   try {
      const { id } = req.params;

      const bootcamp = await Bootcamp.findById(id);

      if (!bootcamp) {
         return res.status(400).json({
            status: false,
            message: 'No bootcamp found '
         })
      }
      if (req.user._id === bootcamp.user) {

         const deletedBootcamp = await Bootcamp.findOneAndDelete({
            _id: id
         });

         const courses = await Course.find({ bootcamp: id });
         // const reviews = await Review.find({ bootcamp: id });
         if (courses.length > 0) {
            await Course.deleteMany({
               bootcamp: id
            });
         }
         // if (reviews.length > 0) {
         //    await Review.deleteMany({
         //       bootcamp: id
         //    });
         // }
         if (deletedBootcamp) {
            return res.status(200).json({
               status: true,
               message: 'Bootcamp deleted successfully',
            })
         }
      } else {
         res.status(401).json({
            status: true,
            message: 'Not authorized'
         })
      }
   } catch (error) {
      console.log(error);
   }
}