const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require("../middleware/auth-check");

const ProductsControler = require("../controllers/products");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // Reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


// Get all products from DB
router.get("/products", ProductsControler.product_get_all);

// Get a specific product from DB
router.get("/:productId", ProductsControler.get_one_product);

// Add products to DB
router.post("/add/product", ProductsControler.products_create_product);

// Update a specific object from the DB
router.patch("/:productId", checkAuth, ProductsControler.update_one_product);

// Delete a specific object from the DB
router.delete("/:productId", checkAuth, ProductsControler.delete_one_product);

module.exports = router;
