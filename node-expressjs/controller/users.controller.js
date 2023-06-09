import User from "../models/users.model.js";

export const registerUser = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      const currUser = await User.findOne({ email });

      if (!currUser) {

         //bcrypt

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

      const user = await User.findOne({ email });

      if (!user) {
         return res.status(401).json({
            status: false,
            message: 'Invalid email or password'
         })
      } else {
         const matchedPassword = await user.matchPassword(password);

         if (matchedPassword) {

            return res.status(200).json({
               status: true,
               data: 'jwt token',
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

