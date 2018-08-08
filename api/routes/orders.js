const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const checkAuth = require("../middleware/auth-check");

const OrdersController = require("../controllers/orders");

// GET all orders from DB
router.get("/", checkAuth, OrdersController.order_get_all);

// Add new order to DB
router.post("/", checkAuth, OrdersController.orders_create_order);

// GET specific order from DB
router.get("/:orderId", checkAuth, OrdersController.get_one_order);

// Delete specific order from DB
router.delete("/:orderId", checkAuth, OrdersController.delete_one_order);

module.exports = router;
