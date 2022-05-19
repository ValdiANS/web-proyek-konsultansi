const MasukKeluarGudang = require('../models/masukKeluarGudangModel')

createMasukKeluarGudang = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a MasukKeluarGudang',
        })
    }

    const new_masukKeluarGudang = new MasukKeluarGudang(body)

    if (!new_masukKeluarGudang) {
        return res.status(400).json({ success: false, error: err })
    }

    new_masukKeluarGudang
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_masukKeluarGudang._id,
                message: 'MasukKeluarGudang created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'MasukKeluarGudang not created!',
            })
        })
}

updateMasukKeluarGudang = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    MasukKeluarGudang.findOne({ _id: req.params.id }, (err, found_masukKeluarGudang) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'MasukKeluarGudang not found!',
            })
        }
        found_masukKeluarGudang.id_produk = body.id_produk
        found_masukKeluarGudang.jumlah_produk = body.jumlah_produk
        found_masukKeluarGudang.aksi = body.aksi
        found_masukKeluarGudang.tanggal = body.tanggal
        found_masukKeluarGudang
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'MasukKeluarGudang updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'MasukKeluarGudang not updated!',
                })
            })
    })
}

deleteMasukKeluarGudang = async (req, res) => {
    await MasukKeluarGudang.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `MasukKeluarGudang not found` })
        }

        return res.status(200).json({ success: true, data: MasukKeluarGudang })
    }).catch(err => console.log(err))
}

getMasukKeluarGudangById = async (req, res) => {
    await MasukKeluarGudang.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getMasukKeluarGudangs = async (req, res) => {
    await MasukKeluarGudang.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `MasukKeluarGudang not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createMasukKeluarGudang,
    updateMasukKeluarGudang,
    deleteMasukKeluarGudang,
    getMasukKeluarGudangs,
    getMasukKeluarGudangById,
}