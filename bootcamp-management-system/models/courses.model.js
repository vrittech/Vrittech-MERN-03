import mongoose from 'mongoose';


const courseSchema = mongoose.Schema({
   title: {
      type: String,
      trim: true,
      required: [true, 'Title is a required field']
   },
   description: {
      type: String,
      trim: true,
      required: [true, 'Description is a required field']
   },
   weeks: {
      type: String,
      required: [true, 'Number of weeks to complete a course is required']
   },
   minimumSkill: {
      type: String,
      required: [true, 'Minumum skill is a required field'],
      enum: ['beginner', 'intermediate', 'advanced']
   },
   content: {
      type: [String],
      required: [true, 'Content is a required field'],
   },
   scholarshipAvailable: {
      type: Boolean,
      default: false
   },
   bootcamp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bootcamp',
      required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, {
   timestamps: true
})

const Course = mongoose.model('Course', courseSchema);

export default Course;