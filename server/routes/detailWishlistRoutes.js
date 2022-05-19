const express = require('express')

const DetailWishlistController = require('../controllers/detailWishlistController')

const router = express.Router()

router.post('/detailwishlist', DetailWishlistController.createDetailWishlist)
router.put('/detailwishlist/:id', DetailWishlistController.updateDetailWishlist)
router.delete('/detailwishlist/:id', DetailWishlistController.deleteDetailWishlist)
router.get('/detailwishlist/:id', DetailWishlistController.getDetailWishlistById)
router.get('/detailwishlists', DetailWishlistController.getDetailWishlists)

module.exports = router