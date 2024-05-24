// models/Address.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  postal_code: String,
  country: String,
});

module.exports = AddressSchema;
