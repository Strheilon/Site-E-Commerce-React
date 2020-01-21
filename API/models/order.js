let mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order: {
        type: Array,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    }
})

let orderModel = mongoose.model('Order', orderSchema)
module.exports = orderModel