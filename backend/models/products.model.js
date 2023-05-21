const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
   {
      title: { type: String },
      description: { type: String },
      price: { type: Number },
      discountPercentage: { type: Number },
      rating: { type: Number },
      stock: Number,
      brand: String,
      category: String,
      thumbnail: String,
      images: mongoose.Schema.Types.Mixed,
   },
   { timestamps: true },
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
