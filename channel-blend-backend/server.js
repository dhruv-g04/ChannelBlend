// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ChannelBlend';

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// MongoDB connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// Define Product Schema
const Product = mongoose.model('Product', {
  _id: String,
  product_image: String,
  product_name: String,
  brand_name: String,
  price: Number, 
  reviews: { 
    rating: Number,
    count: Number
  },
  description: String
});

// API endpoints
app.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.find();
    console.log('Products:', products); // Log products to check
    res.json(products);
  } catch (err) {
    console.error('Error in fetching products:', err);
    next(err); // Pass the error to the error handling middleware
  }
});

app.get('/api/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error('Error in fetching product by ID:', err);
    next(err); // Pass the error to the error handling middleware
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
