import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
   title: {
      type: String,
      trim: true,
      required: [true, 'Review name is a required field'],
      maxlength: 60
   },
   description: {
      type: String,
      trim: true,
      required: [true, 'Review description is a required field'],
      maxlength: 500
   },
   rating: {
      type: Number,
      min: [1, 'Minimum rating should be 1'],
      max: [10, 'Maximum rating should be 10'],
      required: [true, 'Rating is required']
   },
   bootcamp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bootcamp',
      required: true
   },
   course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, {
   timestamps: true
})