import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { validationMessage } from "../constants/validationMessage.constants.js";

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
      jwt: String,
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
   });

userSchema.pre('save', async function () {
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.matchPassword = async function (pass) {
   return bcrypt.compare(pass, this.password)
}

//Hash token & expire reset token
userSchema.methods.getResetToken = function () {
   const resetToken = crypto.randomBytes(10).toString('hex');

   this.resetPasswordToken = crypto.createHash('sha512').update(resetToken).digest('hex');

   //10 minutes
   this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

   return resetToken;
}





const User = mongoose.model('User', userSchema);

export default User;
