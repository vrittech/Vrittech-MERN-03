const express = require("express");

const router = express.Router();
const userRouter = require("./user.route");
const productRouter = require("./product.route");

router.use(userRouter);
router.use(productRouter);

module.exports = router;
