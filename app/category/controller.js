// controllers/categoryController.js
const Category = require("../models/categoryModel");

// Menampilkan semua kategori
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menampilkan satu kategori berdasarkan ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Kategori tidak ditemukan" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menambahkan kategori baru
exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Mengupdate kategori berdasarkan ID
exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ error: "Kategori tidak ditemukan" });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menghapus kategori berdasarkan ID
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndRemove(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Kategori tidak ditemukan" });
    }
    res.json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
