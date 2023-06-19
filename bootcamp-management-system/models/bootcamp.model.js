import mongoose from 'mongoose';
import { validationMessage } from '../constants/validationMessage.constants.js';
import slugify from 'slugify';

const bootcampSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, validationMessage.REQUIRED_NAME_MESSAGE],
      unique: true,
      trim: true,
      minlength: [5, validationMessage.MIN_LENGTH_MESSAGE]
   },
   slug: String,
   desciption: {
      type: String,
      required: [true, validationMessage.REQUIRED_DESCRIPTION_MESSAGE],
      maxlength: [500, validationMessage.MAX_LENGTH_MESSAGE]
   },
   website: {
      type: String,
      match: [
         /https ?: \/\/ (www\.) ? [-a - zA - Z0 - 9@:%._\+~#=]{ 1, 256}\.[a-zA - Z0 - 9()]{ 1, 6 } \b([-a - zA - Z0 - 9()@:% _\+.~# ?&//=]*)/,
         validationMessage.VALID_WEBSITE_MESSAGE
      ]
   },
   phone: {
      type: Number,
      max: [20, validationMessage.PHONE_VALIDATION_MESSAGE]
   },
   email: {
      type: String,
      match: [
         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
         validationMessage.EMAIL_VALIDATION_MESSAGE
      ],
      unique: true,
      required: true
   },
   address: {
      type: String,
      required: [true, validationMessage.ADDRESS_REQUIRED_MESSAGE]
   },
   careers: {
      //Array of Strings
      type: [String],
      required: true,
      enum: [
         'Web Development',
         'Mobile Development',
         'UI/UX',
         'Data Science',
         'Artificial Intelligence',
         'Others'
      ]
   },
   averageRating: {
      type: Number,
      min: [1, 'Minimum rating should be 1'],
      max: [10, 'Maximum rating should be 10']
   },
   averageCost: {
      type: Number,
      required: true
   },
   photo: {
      type: String,
   },
   jobGuarantee: {
      type: Boolean,
      default: false
   },
   jobAssistance: {
      type: Boolean,
      default: false
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, {
   timestamps: true
})

bootcampSchema.pre('save', function (next) {
   this.slug = slugify(this.name.toLowerCase());
   next();
})

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema);

export default Bootcamp;

//regex