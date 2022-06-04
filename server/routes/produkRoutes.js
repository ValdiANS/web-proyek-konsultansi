const express = require('express')

const ProdukController = require('../controllers/produkController')

const router = express.Router()

router.post('/produk', ProdukController.createProduk)
router.post('/insertManyProduk', ProdukController.insertManyProduk)
router.put('/produk/:id', ProdukController.updateProduk)
router.delete('/produk/:id', ProdukController.deleteProduk)
router.get('/produk/:id', ProdukController.getProdukById)
router.get('/produks', ProdukController.getProduks)
router.get('/produkByKategori/:kategori', ProdukController.getProdukByKategori)
router.get('/searchProduk/:key', ProdukController.getProdukByKeyword)

module.exports = router