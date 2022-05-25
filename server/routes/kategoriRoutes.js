const express = require('express')

const KategoriController = require('../controllers/kategoriController')

const router = express.Router()

router.post('/kategori', KategoriController.createKategori)
router.put('/kategori/:id', KategoriController.updateKategori)
router.delete('/kategori/:id', KategoriController.deleteKategori)
router.get('/kategori/:id', KategoriController.getKategoriById)
router.get('/kategoris', KategoriController.getKategoris)

module.exports = router