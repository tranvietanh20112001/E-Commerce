import express from "express";
import dotenv from "dotenv";
import { products } from "../client/src/data/products.js";
import cors from "cors";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("app is running");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
