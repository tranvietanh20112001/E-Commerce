const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = new User({ username, password: hashedPassword });

  try {
    await user.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).send("Error registering user");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcryptjs.compare(password, user.password))) {
    return res.status(400).send("Invalid credentials");
  }

  const token = jwt.sign({ userId: user._id }, "secret_key");
  res.json({ token });
});

router.get("/user", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  res.json(user);
});

module.exports = router;
