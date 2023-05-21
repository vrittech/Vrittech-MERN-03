const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post('/register', async (req, res) => {
   const body = req.body;

   const user = await User.create(body);

   if (user) {
      return res.status(200).json({ status: true, message: "User created successfully", data: { id: user._id } });
   } else {
      return res.status(400).json({ status: false, message: "Something went wrong" });
   }
})

router.post('/login', async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email, password });

   console.log(user)

   if (user) {
      return res.status(200).json({ status: true, message: "User logged in successfully", data: { id: user._id, name: user.fullName } });
   } else {
      return res.status(400).json({ status: false, message: "Incorrect username or password" });
   }
})

module.exports = router;