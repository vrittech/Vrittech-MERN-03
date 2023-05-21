const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
   {
      fullName: {
         type: String,
      },
      phoneNumber: {
         type: String,
      },
      email: {
         type: String,
      },
      dob: {
         type: Date,
      },
      password: {
         type: String,
      },
   },
   { timestamps: true },
);


const User = mongoose.model("User", userSchema);

module.exports = User;
