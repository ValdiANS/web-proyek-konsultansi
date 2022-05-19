const express = require('express')

const ProdukController = require('../controllers/produkController')

const router = express.Router()

router.post('/produk', ProdukController.createProduk)
router.put('/produk/:id', ProdukController.updateProduk)
router.delete('/produk/:id', ProdukController.deleteProduk)
router.get('/produk/:id', ProdukController.getProdukById)
router.get('/produks', ProdukController.getProduks)

module.exports = router