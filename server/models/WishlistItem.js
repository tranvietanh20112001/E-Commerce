const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistItemSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: "Product" },
  added_at: { type: Date, default: Date.now },
});

module.exports = WishlistItemSchema;
