const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

const Product = mongoose.model('Product', productSchema) || mongoose.models.Product

module.exports = Product
