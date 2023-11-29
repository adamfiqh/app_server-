// routes/productRouter.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");

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

// Rute untuk mendapatkan semua produk
router.get("/products", productController.getAllProducts);

// Rute untuk mendapatkan satu produk berdasarkan ID
router.get("/products/:id", productController.getProductById);

// Rute untuk menambahkan produk baru dengan file gambar
router.post(
  "/products",
  upload.single("image"),
  productController.createProduct
);

// Rute untuk mengupdate produk berdasarkan ID dengan file gambar
router.put(
  "/products/:id",
  upload.single("image"),
  productController.updateProduct
);

// Rute untuk menghapus produk berdasarkan ID
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
