const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderItemSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  price_per_unit: Number,
});

module.exports = OrderItemSchema;
