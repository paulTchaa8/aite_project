const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')

const productRoutes = require('./routes/productRoutes')

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

// Ici les routes..
app.use('/api/products', productRoutes)

module.exports = app