const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");
// @route GET api/products
// @desc Get all products
// @access Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// @route POST api/products
// @desc Create a product
// @access Private
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, imageURL, stock_quantity, category } =
      req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      imageURL,
      stock_quantity,
      category,
    });

    await newProduct.save();
    console.log(newProduct);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/products/:id
// @desc Get a product
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.json(product);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route PUT api/products/:id
// @desc Update a product
// @access Private
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route DELETE api/products/:id
// @desc Delete a product
// @access Private
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route GET api/products/search
// @desc Search products
// @access Public
router.get("/search", async (req, res) => {
  const query = req.query.q;
  const products = await Product.find({
    name: { $regex: query, $options: "i" },
  });
  res.json(products);
});

// @route GET api/products/filter
// @desc Filter products
// @access Public
router.get("/filter", async (req, res) => {
  const query = req.query.q;
  const products = await Product.find({ price: { $gte: query } });
  res.json(products);
});

module.exports = router;
