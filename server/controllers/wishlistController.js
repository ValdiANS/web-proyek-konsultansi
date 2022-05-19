const Wishlist = require('../models/wishlistModel')

createWishlist = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Wishlist',
        })
    }

    const new_wishlist = new Wishlist(body)

    if (!new_wishlist) {
        return res.status(400).json({ success: false, error: err })
    }

    new_wishlist
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_wishlist._id,
                message: 'Wishlist created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Wishlist not created!',
            })
        })
}

updateWishlist = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Wishlist.findOne({ _id: req.params.id }, (err, found_wishlist) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Wishlist not found!',
            })
        }
        found_wishlist.id_user = body.id_user
        found_wishlist
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Wishlist updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Wishlist not updated!',
                })
            })
    })
}

deleteWishlist = async (req, res) => {
    await Wishlist.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `Wishlist not found` })
        }

        return res.status(200).json({ success: true, data: Wishlist })
    }).catch(err => console.log(err))
}

getWishlistById = async (req, res) => {
    await Wishlist.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getWishlists = async (req, res) => {
    await Wishlist.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `Wishlist not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createWishlist,
    updateWishlist,
    deleteWishlist,
    getWishlists,
    getWishlistById,
}