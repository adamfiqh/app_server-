// routes/tagRouter.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const tagController = require("../controllers/tagController");

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder tempat menyimpan file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nama file yang disimpan
  },
});

const upload = multer({ storage: storage });

// Rute untuk mendapatkan semua tag
router.get("/tags", tagController.getAllTags);

// Rute untuk mendapatkan satu tag berdasarkan ID
router.get("/tags/:id", tagController.getTagById);

// Rute untuk menambahkan tag baru dengan file gambar
router.post("/tags", upload.single("image"), tagController.createTag);

// Rute untuk mengupdate tag berdasarkan ID dengan file gambar
router.put("/tags/:id", upload.single("image"), tagController.updateTag);

// Rute untuk menghapus tag berdasarkan ID
router.delete("/tags/:id", tagController.deleteTag);

module.exports = router;
