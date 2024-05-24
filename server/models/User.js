const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: String,
  last_name: String,
  phone_number: String,
  address: {
    city: String,
    district: String,
    ward: String,
    street: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: true },
  is_admin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
