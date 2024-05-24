const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentMethodSchema = new Schema({
  payment_id: { type: Schema.Types.ObjectId, ref: "PaymentMethod" },
  type: String,
  details: String,
  expiration_date: String,
});

module.exports = PaymentMethodSchema;
