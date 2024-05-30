const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

router.post("/add-to-cart", async (req, res) => {
  try {
    const productId = req.body.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      cart = new Cart({ userId: req.user._id, items: [] });
    }
    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (item) {
      item.quantity++;
      item.price = product.price * item.quantity;
    } else {
      cart.items.push({
        productId: productId,
        quantity: 1,
        price: product.price,
      });
    }
    cart.totalPrice += product.price;
    await cart.save();
    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/cart", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate(
      "items.productId"
    );
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
