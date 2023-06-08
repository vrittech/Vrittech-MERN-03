import mongoose from 'mongoose';

const addressSchema = {
   street: String,
   city: String,
   postalCode: Number
}

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
   },
   password: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 15
   },
   address: addressSchema,
}, {
   timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;