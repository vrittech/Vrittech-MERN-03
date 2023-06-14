import mongoose from "mongoose";

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'Name is a required field']
      },
      email: {
         type: String,
         required: [true, 'Email is a required field'],
         unique: true,
         match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            validationMessage.EMAIL_VALIDATION_MESSAGE
         ],
      },
      role: {
         type: String,
         default: 'user',
         enum: ['user', 'publisher']
      },
      password: {
         type: String,
         required: [true, 'Password is a required field'],
         match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"

         ]
      },
      resetPasswordToken: {
         type: String
      },
      resetPasswordExpire: {
         type: Date
      },
      passwordExpire: {
         type: Date
      }
   },
   {
      timestamps: true
   })

const User = mongoose.model('User', userSchema);

export default User;
