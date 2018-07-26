const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/auth-check");

const ProductsControler = require("../controllers/products");

// Get all products from DB
router.get("/", ProductsControler.product_get_all);

// Get a specific product from DB
router.get("/:productId", ProductsControler.get_one_product);

// Update a specific object from the DB
router.patch("/:productId", checkAuth, ProductsControler.update_one_product);

// Delete a specific object from the DB
router.delete("/:productId", checkAuth, ProductsControler.delete_one_product);

module.exports = router;
