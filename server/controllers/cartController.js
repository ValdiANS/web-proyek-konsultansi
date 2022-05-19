const Cart = require('../models/cartModel')

createCart = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Cart',
        })
    }

    const new_cart = new Cart(body)

    if (!new_cart) {
        return res.status(400).json({ success: false, error: err })
    }

    new_cart
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_cart._id,
                message: 'Cart created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cart not created!',
            })
        })
}

updateCart = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Cart.findOne({ _id: req.params.id }, (err, found_cart) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Cart not found!',
            })
        }
        found_cart.id_user = body.id_user
        found_cart
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Cart updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Cart not updated!',
                })
            })
    })
}

deleteCart = async (req, res) => {
    await Cart.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` })
        }

        return res.status(200).json({ success: true, data: Cart })
    }).catch(err => console.log(err))
}

getCartById = async (req, res) => {
    await Cart.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getCarts = async (req, res) => {
    await Cart.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getCarts,
    getCartById,
}