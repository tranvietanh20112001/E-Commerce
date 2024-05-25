// models/Product.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String },
  stock_quantity: { type: Number, default: 0 },
  imageURL: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

ProductSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
