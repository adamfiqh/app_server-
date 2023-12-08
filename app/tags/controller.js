// controllers/tagController.js
const Tag = require("../tags/model");

// Menampilkan semua tag
exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menampilkan satu tag berdasarkan ID
exports.getTagById = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) {
      return res.status(404).json({ error: "Tag tidak ditemukan" });
    }
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menambahkan tag baru
exports.createTag = async (req, res) => {
  try {
    const newTag = new Tag(req.body);
    const savedTag = await newTag.save();
    res.json(savedTag);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Mengupdate tag berdasarkan ID
exports.updateTag = async (req, res) => {
  try {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTag) {
      return res.status(404).json({ error: "Tag tidak ditemukan" });
    }
    res.json(updatedTag);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menghapus tag berdasarkan ID
exports.deleteTag = async (req, res) => {
  try {
    const deletedTag = await Tag.findByIdAndRemove(req.params.id);
    if (!deletedTag) {
      return res.status(404).json({ error: "Tag tidak ditemukan" });
    }
    res.json(deletedTag);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
