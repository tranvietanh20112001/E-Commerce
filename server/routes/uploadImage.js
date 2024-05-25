const multer = require("multer");
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const express = require("express");

const router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "e-commerce-6354a.appspot.com",
});
const bucket = admin.storage().bucket();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), (req, res) => {
  console.log("Headers:", req.headers);
  console.log("File:", req.file);

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  blobStream.on("error", (err) => {
    res
      .status(500)
      .send({
        message: "Error uploading file to Firebase Storage",
        error: err.message,
      });
  });

  blobStream.on("finish", () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).send({ imageUrl: publicUrl });
  });

  blobStream.end(req.file.buffer);
});

module.exports = router;
