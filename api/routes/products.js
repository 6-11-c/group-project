const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

// Get all products from DB
router.get("/", (req, res, next) => {
  Product.find()
    .select("name price _id")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            request: {
              type: "GET",
              url: `http://localhost:5000/products/${doc._id}`
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Add new products to DB
router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Created product successfully",
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: "GET",
            url: `http://localhost:5000/products/${result._id}`
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Get a specific product from DB
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .select("name price _id")
    .exec()
    .then(doc => {
      console.log("Data from database: ", doc);
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: "GET",
            description: "GET_SINGLE_PRODUCT",
            url: `http://localhost:5000/products/${doc.id}`
          }
        });
      } else {
        res.status(404).json({
          message: "No valid data entry for provided ID"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Update a specific object from the DB
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Product Updated",
        request: {
          type: "GET",
          description: "UPDATE_SINGLE_PRODUCT",
          url: `http://localhost:5000/products/${id}`
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Delete a specific object from the DB
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:5000/products",
          body: {
            name: "String",
            price: "Number"
          }
        }
      });
    })
    .catch(err => {
      conosle.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
