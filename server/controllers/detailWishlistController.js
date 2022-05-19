const DetailWishlist = require('../models/detailWishlistModel')

createDetailWishlist = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a DetailWishlist',
        })
    }

    const new_detailWishlist = new DetailWishlist(body)

    if (!new_detailWishlist) {
        return res.status(400).json({ success: false, error: err })
    }

    new_detailWishlist
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_detailWishlist._id,
                message: 'DetailWishlist created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'DetailWishlist not created!',
            })
        })
}

updateDetailWishlist = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    DetailWishlist.findOne({ _id: req.params.id }, (err, found_detailWishlist) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'DetailWishlist not found!',
            })
        }
        found_detailWishlist.id_wishlist = body.id_wishlist
        found_detailWishlist.id_produk = body.id_produk
        found_detailWishlist
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'DetailWishlist updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'DetailWishlist not updated!',
                })
            })
    })
}

deleteDetailWishlist = async (req, res) => {
    await DetailWishlist.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `DetailWishlist not found` })
        }

        return res.status(200).json({ success: true, data: DetailWishlist })
    }).catch(err => console.log(err))
}

getDetailWishlistById = async (req, res) => {
    await DetailWishlist.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getDetailWishlists = async (req, res) => {
    await DetailWishlist.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `DetailWishlist not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createDetailWishlist,
    updateDetailWishlist,
    deleteDetailWishlist,
    getDetailWishlists,
    getDetailWishlistById,
}