const express = require('express')
const Product = require('../models/Product')

const router = express.Router()

// Lister les produits
exports.getProducts = async (req, res) => {
  const { search, category } = req.query
  let query = {}

  if (search) {
    query.name = { $regex: search, $options: 'i' }
  }

  if (category) {
    query.category = category
  }

  try {
    const products = await Product.find(query)
    res.status(200).json(products)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

// details d'un produit par son ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Produit introuvable' })
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Creons un nouveau produit
exports.createProduct = async (req, res) => {
  const { name, price, description, category, image } = req.body
  const newProduct = new Product({ name, price, description, category, image })
  try {
    const savedProduct = await newProduct.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// update un produit
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, req.body, { new: true })
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Produit introuvable' })
    }
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Supprimer un produit a partir de son id
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Produit introuvable' });
    }
    res.status(200).json({ message: 'Product supprime !' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
