import mongoose from "mongoose";

const productSchema = mongoose.Schema(
   {
      title: {
         type: String,
         minLength: 5,
         maxLength: 10,
      },
      price: {
         type: Number,
         min: 500,
         max: 10000,
      },
      description: {
         type: String,
      },
      category: {
         type: String,
      },
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
      }
   }, {
   timestamps: true

})

const Product = mongoose.model("Product", productSchema);

export default Product;