// models/Order.js
const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderItemSchema = require("./OrderItem");

const OrderSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: "Order" },
  order_date: { type: Date, default: Date.now },
  total_amount: Number,
  items: [OrderItemSchema],
});

module.exports = OrderSchema;
