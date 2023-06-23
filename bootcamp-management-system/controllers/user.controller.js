import User from "../models/users.model.js";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../utils/sendEmail.js";
import crypto from 'crypto';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
   try {
      const { email } = req.body;



      const currUser = await User.findOne({ email });

      if (!currUser) {
         const user = new User(req.body);
         await user.save();

         res.status(200).json({
            status: true,
            data: user,
            message: 'Created successfully'
         })
      } else {
         res.status(400).json({
            status: false,
            message: 'Email already registered'
         })
      }


   } catch (error) {
      res.status(400).json({
         status: false,
         error: error.message
      })
   }
}

export const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;
      //NO SQL Injection
      const user = await User.findOne({ email });

      if (!user) {
         return res.status(401).json({
            status: false,
            message: 'Invalid email or password'
         })
      } else {
         const matchedPassword = await user.matchPassword(password);

         if (matchedPassword) {
            //1. create jwt token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
            //access token

            // 2. store jwt token on our end
            const updatedUser = await User.findOneAndUpdate(
               { _id: user._id }, {
               $set: { jwt: token }
            },
               {
                  new: true
               }
            )

            // 3. return jwt token from our end
            //client-> jwt token
            return res.status(200).json({
               status: true,
               data: updatedUser.jwt,
               message: 'User logged in successfully'
            })
         } else {
            return res.status(401).json({
               status: false,
               message: 'Invalid email or password'
            })
         }
      }


   } catch (error) {
      res.status(400).json({
         status: false,
         error: error.message
      })
   }
}

export const forgotPassword = async (req, res) => {
   try {
      const { email } = req.body;
      const user = await User.findOne({ email })
      if (!user) {
         return res.status(400).json({
            status: false,
            message: 'No user found'
         })
      }

      const resetToken = user.getResetToken();

      const message = 'You are receiving this email because you have requested to reset your password. Your reset token is:' + resetToken + '<br/>Your token will expire in 10 minutes.';
      try {
         //send email through nodemailer
         await sendEmail({
            email,
            subject: 'Password reset token',
            message
         });
         await user.save({ validateBeforeSave: false })
         return res.status(201).json({
            status: true,
            message: 'Email sent successfully'
         })
      } catch (err) {
         console.log(err);
         user.resetPasswordToken = undefined;
         user.resetPasswordExpire = undefined;
         await user.save({ validateBeforeSave: false })
         return res.status(400).json({
            status: false,
            message: 'Failed to send Email '
         })
      }

   } catch (error) {
      console.log(error)
   }
}

export const resetPassword = async (req, res) => {
   try {
      const { resettoken } = req.params;
      //Get hashed token
      const resetPasswordToken
         = crypto.createHash('sha512').update(resettoken).digest('hex');

      const user = await User.findOne({
         resetPasswordToken,
         resetPasswordExpire: { $gt: Date.now() }
      })

      if (!user) {
         return res.status(400).json({
            status: false,
            message: 'Invalid password token or password expired'
         })
      }

      const password = await hashPassword(req.body.password);
      const updatedPass = await User.findOneAndUpdate({
         _id: user._id
      }, {
         $set: {
            password,
            resetPasswordExpire: '',
            resetPasswordToken: ''
         }
      }, {
         new: true
      })

      if (updatedPass) {
         return res.status(200).json({
            status: true,
            message: 'Password reset successfully'
         })
      }

   } catch (error) {
      console.log(error)
   }
}

const hashPassword = async (password) => {
   const salt = await bcrypt.genSalt(10);
   const hashed = await bcrypt.hash(password, salt);
   return hashed;
}