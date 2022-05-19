const express = require('express')

const WishlistController = require('../controllers/wishlistController')

const router = express.Router()

router.post('/wishlist', WishlistController.createWishlist)
router.put('/wishlist/:id', WishlistController.updateWishlist)
router.delete('/wishlist/:id', WishlistController.deleteWishlist)
router.get('/wishlist/:id', WishlistController.getWishlistById)
router.get('/wishlists', WishlistController.getWishlists)

module.exports = router