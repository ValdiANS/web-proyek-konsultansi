const express = require('express')

const OrdersController = require('../controllers/ordersController')

const router = express.Router()

router.post('/order', OrdersController.createOrders)
router.put('/order/:id', OrdersController.updateOrders)
router.delete('/order/:id', OrdersController.deleteOrders)
router.get('/order/:id', OrdersController.getOrdersById)
router.get('/orders', OrdersController.getOrderss)

module.exports = router