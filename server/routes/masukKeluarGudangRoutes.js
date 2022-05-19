const express = require('express')

const MasukKeluarGudangController = require('../controllers/masukKeluarGudangController')

const router = express.Router()

router.post('/gudang', MasukKeluarGudangController.createMasukKeluarGudang)
router.put('/udang/:id', MasukKeluarGudangController.updateMasukKeluarGudang)
router.delete('/gudang/:id', MasukKeluarGudangController.deleteMasukKeluarGudang)
router.get('/gudang/:id', MasukKeluarGudangController.getMasukKeluarGudangById)
router.get('/gudangs', MasukKeluarGudangController.getMasukKeluarGudangs)

module.exports = router