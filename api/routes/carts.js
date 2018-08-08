<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const CartController = require("../controllers/cart");

router.post("/", CartController.add_to_cart);
router.put("/", CartController.delete_from_cart);
router.get("/:id", CartController.get_cart);

module.exports = router;
=======
const express = require("express");
const router = express.Router();

const CartController = require("../controllers/cart");

router.post("/", CartController.add_to_cart);
router.put("/", CartController.delete_from_cart);
router.get("/:id", CartController.get_cart);

module.exports = router;
>>>>>>> f17907b253f4c2515d7742013541fd052cad68b2
