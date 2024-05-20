const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  // image: { type: String, required: false },
});

module.exports = mongoose.model("products", ProductSchema);
