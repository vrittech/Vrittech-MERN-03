import cloudinary from "../config/cloudinary.config.js";
import Bootcamp from "../models/bootcamp.model.js";

export const getBootcamp = async (req, res) => {
   try {
      //Advanced Filtering

      const reqQuery = { ...req.query };

      //Fields to remove
      const removeFields = ['select', 'sort', 'page', 'limit'];

      removeFields.forEach(param => delete reqQuery[param]);

      let queryStr = JSON.stringify(reqQuery);

      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|eq|ne|in)\b/, match => `$${match}`)
      queryStr = JSON.parse(queryStr);
      let appendFilterQuery = Bootcamp.find(queryStr);

      // const bootcamps = await Bootcamp.find({ title: { $eq: 'Bootcamp 1' } });
      // const bootcamps = await Bootcamp.find({ description: { $gt: 'Bootcamp 1' } });
      // const bootcamps = await Bootcamp.find({ title: { $lt: 'Bootcamp 1' } });
      // const bootcamps = await Bootcamp.find({ title: { $gte: 'Bootcamp 1' } });
      // const bootcamps = await Bootcamp.find({ title: { $lte: 'Bootcamp 1' } });

      //select specific fields
      if (req.query.select) {
         const fields = req.query.select.split(',').join(' ');
         appendFilterQuery = appendFilterQuery.select(fields);
      }

      //sort ascending /descending
      if (req.query.sort) {
         const fields = req.query.sort.split(',').join(' ');
         appendFilterQuery = appendFilterQuery.sort(fields)
         console.log(appendFilterQuery)
      } else {
         appendFilterQuery.sort('-createdAt');
      }

      //Pagination
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      //page -2 ->  (page-1)* limit
      const skipData = (page - 1) * limit;
      //Previous page -> skip
      // -> 1 * 3 = 3

      appendFilterQuery = appendFilterQuery.skip(skipData).limit(limit);
      const total = await Bootcamp.countDocuments();

      const bootcamps = await appendFilterQuery;


      if (bootcamps.length > 0) {
         return res.status(200).json({
            status: true,
            data: bootcamps,
            total
         })
      } else {
         return res.status(400).json({
            status: false,
            message: 'No bootcamps found'
         })
      }
   } catch (error) {

   }
}


export const addBootcamp = async (req, res) => {
   try {
      let uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
      const data = req.body;
      data.photo = uploadedFile.secure_url;
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