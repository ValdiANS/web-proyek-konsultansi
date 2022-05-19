const express = require('express')

const CartController = require('../controllers/cartController')

const router = express.Router()

router.post('/cart', CartController.createCart)
router.put('/cart/:id', CartController.updateCart)
router.delete('/cart/:id', CartController.deleteCart)
router.get('/cart/:id', CartController.getCartById)
router.get('/carts', CartController.getCarts)

module.exports = router