const express = require('express');
const app = express();
const path = require('path');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Production Only
app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;