import Product from "../models/products.model.js"
import mongoose from "mongoose";
//Read
export const getProducts = async (req, res) => {
   try {
      const products = await Product.find();

      if (products.length > 0) {
         res.status(200).json({
            status: true,
            data: products,
            message: "Products fetched successfully"
         })
      } else {
         res.status(200).json({
            status: false,
            message: "No products found"
         })
      }

   } catch (error) {
      console.log(error)
   }
}

// /:id

//Create
export const postProducts = async (req, res) => {
   try {
      const prods = new Product(req.body);
      await prods.save();

      // const prods = await Product.create(req.body);
      res.status(200).json({
         status: true,
         data: prods,
         message: "Product created successfully"
      })
   } catch (error) {
      console.log(error)
   }
}

export const getProductById = async (req, res) => {
   try {
      const product = await Product.findOne({ _id: req.params.prodid });

      if (product) {
         res.status(200).json({
            status: true,
            data: product,
            message: 'Product fetched successfully'
         })
      } else {
         res.status(404).json({
            status: false,
            message: 'No product found'
         })
      }

      // const product = await Product.findById(id)
   } catch (error) {
      console.log(error);
   }
}

export const deleteProduct = async (req, res) => {
   try {
      const { prodid } = req.params;

      const prod = await Product.findOneAndDelete({ _id: prodid });
      // const prod = await Product.deleteOne({ _id: prodid });

      if (prod)
         res.status(200).json({
            status: true,
            message: 'Product deleted successfully'
         })
      else
         res.status(404).json({
            status: false,
            message: 'No product found'
         })


   } catch (error) {
      console.log(error);
   }
}

