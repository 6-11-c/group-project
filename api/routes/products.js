const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (id === 'unique') {
    res.status(200).json({
      message: "Unique product"
    })
  } else {
    res.status(200).json({
      message: `You passed in product ID: ${id}`
    })
  }
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Updated product ID: ${id}`
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Deleted product ID: ${id}`
  })
});

module.exports = router;