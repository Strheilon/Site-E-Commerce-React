let mongoose = require('mongoose')

const discountSchema = new mongoose.Schema({
    promo: {
        type: String,
        required: false
    },
    date_max: {
        type: Date,
        required: false 
    } 
})

let discountModel = mongoose.model('Discount', discountSchema)
module.exports = discountModel