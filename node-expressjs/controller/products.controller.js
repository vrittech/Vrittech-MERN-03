import Product from "../models/products.model.js"
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