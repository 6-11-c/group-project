const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests for orders."
  })
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Order was created."
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Order was retrieved",
    orderId: req.params.id
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Order was deleted",
    orderId: req.params.id
  })
});


module.exports = router;