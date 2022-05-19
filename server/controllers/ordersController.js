const Orders = require('../models/ordersModel')

createOrders = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Orders',
        })
    }

    const new_order = new Orders(body)

    if (!new_order) {
        return res.status(400).json({ success: false, error: err })
    }

    new_order
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: new_order._id,
                message: 'Orders created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Orders not created!',
            })
        })
}

updateOrders = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Orders.findOne({ _id: req.params.id }, (err, found_order) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Orders not found!',
            })
        }
        found_order.id_user = body.id_user
        found_order.id_cart = body.id_cart
        found_order.jumlah_bayar = body.jumlah_bayar
        found_order
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Orders updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Orders not updated!',
                })
            })
    })
}

deleteOrders = async (req, res) => {
    await Orders.findOneAndDelete({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!results) {
            return res
                .status(404)
                .json({ success: false, error: `Orders not found` })
        }

        return res.status(200).json({ success: true, data: Orders })
    }).catch(err => console.log(err))
}

getOrdersById = async (req, res) => {
    await Orders.findOne({ _id: req.params.id }, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

getOrderss = async (req, res) => {
    await Orders.find({}, (err, results) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!results.length) {
            return res
                .status(404)
                .json({ success: false, error: `Orders not found` })
        }
        return res.status(200).json({ success: true, data: results })
    }).catch(err => console.log(err))
}

module.exports = {
    createOrders,
    updateOrders,
    deleteOrders,
    getOrderss,
    getOrdersById,
}