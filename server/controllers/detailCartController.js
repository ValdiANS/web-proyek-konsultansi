const DetailCart = require('../models/detailCartModel')

createDetailCart = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a DetailCart',
        })
    }

    const new_detailCart = new DetailCart(body)

    if (!new_detailCart) {
        return res.status(400).json({ success: false, error: err })
    }

    new_detailCart
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_detailCart._id,
                message: 'DetailCart created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'DetailCart not created!',
            })
        })
}

updateDetailCart = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    DetailCart.findOne({ _id: req.params.id }, (err, found_detailCart) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'DetailCart not found!',
            })
        }
        found_detailCart.id_cart = body.id_cart
        found_detailCart.id_produk = body.id_produk
        found_detailCart.jumlah_produk = body.jumlah_produk
        found_detailCart.catatan = body.catatan
        found_detailCart
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'DetailCart updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'DetailCart not updated!',
                })
            })
    })
}

deleteDetailCart = async (req, res) => {
    await DetailCart.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `DetailCart not found` })
        }

        return res.status(200).json({ success: true, data: DetailCart })
    }).catch(err => console.log(err))
}

getDetailCartById = async (req, res) => {
    await DetailCart.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getDetailCarts = async (req, res) => {
    await DetailCart.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `DetailCart not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createDetailCart,
    updateDetailCart,
    deleteDetailCart,
    getDetailCarts,
    getDetailCartById,
}