const express = require("express");
const Product = require("../models/products.model");

const router = express.Router();


router.post('/products', async (req, res) => {
   const body = req.body;

   const product = await Product.create(body);

   if (product) {
      return res.status(200).json({ status: true, message: "Product created successfully", data: product });
   } else {
      return res.status(400).json({ status: false, message: "Something went wrong" });
   }
})

router.get('/products', async (req, res) => {

   const products = await Product.find();

   if (products) {
      return res.status(200).json({ status: true, message: "Product fetched successfully", data: products });
   } else {
      return res.status(400).json({ status: false, message: "Something went wrong" });
   }
})

router.get('/products/:id', async (req, res) => {
   const { id } = req.params;

   const product = await Product.findOne({ _id: id });

   if (product) {
      return res.status(200).json({ status: true, message: "product returned successfully", data: product });
   } else {
      return res.status(400).json({ status: false, message: "Something went wrong" });
   }
})

router.delete('/products/:id', async (req, res) => {
   const { id } = req.params;

   const product = await Product.deleteOne({ _id: id });

   if (product) {
      return res.status(200).json({ status: true, message: "product deleted successfully" });
   } else {
      return res.status(400).json({ status: false, message: "Something went wrong" });
   }
})


router.patch('/products/:id', async (req, res) => {
   const { id } = req.params;
   const body = req.body;


   const product = await Product.findOneAndUpdate({ _id: id }, {
      $set: body,
   })

   if (product) {
      return res.status(200).json({ status: true, message: "product updated successfully", data: product });
   } else {
      return res.status(400).json({ status: false, message: "Something went wrong" });
   }
})

module.exports = router;