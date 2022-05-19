const express = require('express')

const DetailCartController = require('../controllers/detailCartController')

const router = express.Router()

router.post('/detailcart', DetailCartController.createDetailCart)
router.put('/detailcart/:id', DetailCartController.updateDetailCart)
router.delete('/detailcart/:id', DetailCartController.deleteDetailCart)
router.get('/detailcart/:id', DetailCartController.getDetailCartById)
router.get('/detailcarts', DetailCartController.getDetailCarts)

module.exports = router