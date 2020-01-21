let mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    dpi: {
        type: Number,
        required: false
    },
    stockage: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    mark: {
        type: String,
        required: false
    }
})

let productModel = mongoose.model('Product', productSchema)
module.exports = productModel