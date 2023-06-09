import mongoose from 'mongoose';
import pkg from 'validator';
const { isEmail } = pkg;
import bcrycpt from 'bcrypt';

const addressSchema = {
   street: String,
   city: String,
   postalCode: Number
}

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Name is a required field'],
      minLength: [3, 'Minimum length should of 3 characters'],
      maxLength: [30, 'maximum length should of 30 characters'],
   },
   email: {
      type: String,
      required: true,
      unique: [true, 'Email should be a unique field'],
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email']
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

userSchema.pre('save', async function (next) {
   const salt = await bcrycpt.genSalt(10);
   this.password = await bcrycpt.hash(this.password, salt);
   next();
})

userSchema.methods.matchPassword = async function (pass) {
   return bcrycpt.compare(pass, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;