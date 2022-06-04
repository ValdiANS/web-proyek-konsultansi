const Kategori = require('../models/kategoriModel')

createKategori = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Kategori',
        })
    }

    const new_kategori = new Kategori(body)

    if (!new_kategori) {
        return res.status(400).json({ success: false, error: err })
    }

    new_kategori
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_kategori._id,
                message: 'Kategori created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Kategori not created!',
            })
        })
}

insertManyKategori = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Kategori',
        })
    }

    Kategori.insertMany(body).then(()=>{
        return res.status(201).json({
            success: true,
            message: 'All kategoris are imported!'
        })
    })
}

updateKategori = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Kategori.findOne({ _id: req.params.id }, (err, found_kategori) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Kategori not found!',
            })
        }
        found_kategori.nama = body.nama
        found_kategori.deskripsi = body.deskripsi
        found_kategori
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Kategori updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Kategori not updated!',
                })
            })
    })
}

deleteKategori = async (req, res) => {
    await Kategori.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `Kategori not found` })
        }

        return res.status(200).json({ success: true, data: Kategori })
    }).catch(err => console.log(err))
}

getKategoriById = async (req, res) => {
    await Kategori.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getKategoris = async (req, res) => {
    await Kategori.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `Kategori not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createKategori,
    updateKategori,
    deleteKategori,
    getKategoris,
    getKategoriById,
    insertManyKategori,
}