const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", userController.login);
router.post("/orange", userController.orange);
router.post("/onion", userController.onion);
router.post("/meat", userController.meat);
router.post("/cabbage", userController.cabbage);
router.post("/onion", userController.onion);
router.post("/lemon", userController.lemon);
router.post("/potato", userController.potato);
router.post("/avacado", userController.avacado);
router.post("/carrot", userController.carrot);

router.get('/shopping-cart',userController.view);
router.post("/shopping-cart", userController.search);
router.post('/search/:qty',userController.search);
router.get('/:SNO',userController.delete);


module.exports = router;