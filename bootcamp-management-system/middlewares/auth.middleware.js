import jwt from 'jsonwebtoken';
import User from '../models/users.model.js';

export const authMiddleware = async (req, res, next) => {
   try {
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
         const token = req.headers.authorization.split(" ")[1];

         const validatedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

         const user = await User.findOne({ _id: validatedData.id });

         req.user = user;
         next();
      } else {
         return res.status(401).json({
            status: false,
            message: 'Unauthorized user'
         })
      }
   } catch (error) {
      console.log(error)
   }
}

export const authorize = (...roles) => async (req, res, next) => {
   if (roles.includes(req.user.role)) {
      next();
   } else {
      res.status(401).json({
         status: false,
         message: 'You are not a authorized user to access this resources'
      })
   }

}

