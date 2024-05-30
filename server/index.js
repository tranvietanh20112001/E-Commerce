const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const imageRouter = require("./routes/uploadImage");
const cartRouter = require("./routes/cart");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/image", imageRouter);
app.use("/api/cart", cartRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
