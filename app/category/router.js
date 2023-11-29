// routes/categoryRouter.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const categoryController = require("../controllers/categoryController");

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

// Rute untuk mendapatkan semua kategori
router.get("/categories", categoryController.getAllCategories);

// Rute untuk mendapatkan satu kategori berdasarkan ID
router.get("/categories/:id", categoryController.getCategoryById);

// Rute untuk menambahkan kategori baru dengan file gambar
router.post(
  "/categories",
  upload.single("image"),
  categoryController.createCategory
);

// Rute untuk mengupdate kategori berdasarkan ID dengan file gambar
router.put(
  "/categories/:id",
  upload.single("image"),
  categoryController.updateCategory
);

// Rute untuk menghapus kategori berdasarkan ID
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
