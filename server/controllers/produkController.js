const Produk = require('../models/produkModel')

createProduk = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Produk',
        })
    }

    const new_produk = new Produk(body)

    if (!new_produk) {
        return res.status(400).json({ success: false, error: err })
    }

    new_produk
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_produk._id,
                message: 'Produk created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Produk not created!',
            })
        })
}

updateProduk = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Produk.findOne({ _id: req.params.id }, (err, found_produk) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Produk not found!',
            })
        }
        found_produk.nama = body.nama
        found_produk.harga = body.harga
        found_produk.stok = body.stok
        found_produk.link_gambar = body.link_gambar
        found_produk
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Produk updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Produk not updated!',
                })
            })
    })
}

deleteProduk = async (req, res) => {
    await Produk.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `Produk not found` })
        }

        return res.status(200).json({ success: true, data: Produk })
    }).catch(err => console.log(err))
}

getProdukById = async (req, res) => {
    await Produk.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getProdukByKategori = async (req, res) => {
    await Produk.find({ id_kategori: req.params.kategori }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getProdukByKeyword = async (req, res) => {
    await Produk.aggregate([
        {$match:{
            $or:[
                {nama: {$regex: req.params.key, $options: 'i'}},
                {brand: {$regex: req.params.key, $options: 'i'}}
            ]
        }},
        {$lookup:{
            from: "kategoris",
            localField: "id_kategori",
            foreignField: "_id",
            as: "infoKategori"
        }}
    ], (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getProduks = async (req, res) => {
    await Produk.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `Produk not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createProduk,
    updateProduk,
    deleteProduk,
    getProduks,
    getProdukById,
    getProdukByKategori,
    getProdukByKeyword,
}