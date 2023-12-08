// models/productModel.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "panjang nama minimal 3 karakter"],
      required: [true, "Nama makanan harus diisi"],
    },
    description: {
      type: String,
      maxlength: [1000, "panjang deskripsi maksimal 1000 karakter"],
    },
    price: {
      type: Number,
      default: 0,
    },

    image_url: String,

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = Product;
